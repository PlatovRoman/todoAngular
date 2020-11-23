import {Component, OnInit, OnDestroy} from '@angular/core';
import {DateTransService} from '../date-trans.service';
import {Task} from '../task';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {HttpService} from '../http.service';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-edit-task-name',
  templateUrl: './edit-task-name.component.html',
  styleUrls: ['./edit-task-name.component.css']
})
export class EditTaskNameComponent implements OnInit, OnDestroy {
  public task: Task;
  public unsub$$: Subject<any> = new Subject();

  EditTask: FormGroup = new FormGroup({
    Name: new FormControl(),
  });

  constructor(private dateTrans: DateTransService, private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.dateTrans.clickTaskEdit$.pipe(takeUntil(this.unsub$$)).subscribe((task: Task) => {
      this.task = task;
      this.EditTask.get('Name').setValue(task.taskName);
    });
  }

  public onClickSaveEdit(): void {
    this.task.taskName = this.EditTask.get('Name').value;
    this.httpService.putData(this.task.id, this.task);
  }

  ngOnDestroy(): void {
    this.unsub$$.next();
    this.unsub$$.complete();
  }
}
