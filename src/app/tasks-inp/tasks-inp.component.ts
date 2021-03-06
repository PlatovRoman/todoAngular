import {Component, OnInit, OnDestroy} from '@angular/core';
import {Task} from '../task';
import {DateTransService} from '../date-trans.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {HttpService} from '../http.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-tasks-inp',
  templateUrl: './tasks-inp.component.html',
  styleUrls: ['./tasks-inp.component.css']
})
export class TasksINPComponent implements OnInit, OnDestroy {
  public unsub$$: Subject<any> = new Subject();

  FormTaskNameAndPriority: FormGroup = new FormGroup({
    taskName: new FormControl('', Validators.required),
    taskPriority: new FormControl('high'),
  });
  FormFilterStat: FormGroup = new FormGroup({
    isCompleted: new FormControl(false),
    high: new FormControl(false),
    normal: new FormControl(false),
    low: new FormControl(false)
  });

  constructor(private dateTrans: DateTransService, private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.FormFilterStat.valueChanges
      .pipe(takeUntil(this.unsub$$))
      .subscribe((filterStatus) => {
      const selectedFilterStatus: string[] = Object.keys(filterStatus).filter((key: string) => filterStatus[key]);
      this.dateTrans.changeFilterStat(selectedFilterStatus);
    });
  }

  public get inputControl(): FormControl {
    return this.FormTaskNameAndPriority.get('taskName') as FormControl;
  }

  public onClickAdd(): void {
    let helpVisible = false;
    const selectedFilterStatus: string[] = Object.keys(this.FormFilterStat.value).filter((key: string) => this.FormFilterStat.value[key]);
    if (selectedFilterStatus.includes(this.FormTaskNameAndPriority.get('taskPriority').value) || (selectedFilterStatus.length === 0)){
      helpVisible = true;
    }

    const task: Task = {
      taskName: this.FormTaskNameAndPriority.get('taskName').value,
      taskPriority: this.FormTaskNameAndPriority.get('taskPriority').value,
      taskIsOk: false,
      taskTimeCreate: new Date(),
      taskVisible: helpVisible
    };

    this.httpService.postData(task);

    this.FormTaskNameAndPriority.get('taskName').reset('');
  }

  public onClickSort(): void {
    this.dateTrans.clickSort(true);
  }

  ngOnDestroy(): void {
    this.unsub$$.next();
    this.unsub$$.complete();
  }
}
