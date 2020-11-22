import {Component, OnInit, OnDestroy} from '@angular/core';
import {DateTransService} from '../date-trans.service';
import {Task} from '../task';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {HttpService} from "../http.service";

@Component({
  selector: 'app-edit-task-name',
  templateUrl: './edit-task-name.component.html',
  styleUrls: ['./edit-task-name.component.css']
})
export class EditTaskNameComponent implements OnInit/*OnDestroy*/ {
  public task: Task;

  EditTask: FormGroup = new FormGroup({
    Name: new FormControl(),
  });

  constructor(private dateTrans: DateTransService) {
  }

  ngOnInit(): void {
    this.dateTrans.clickTaskEdit.subscribe((task: Task) => {
      this.task = task;
      this.EditTask.get('Name').setValue(task.taskName);
    });
  }

  public onClickSaveEdit(): void {
    // todo редактирование обрабатывается с использованием избыточной переменной clickSaveEdit и функции clickSave
    this.task.taskName = this.EditTask.get('Name').value;
    this.dateTrans.clickSave(this.task);
  }

  /*ngOnDestroy(): void {
    this.dateTrans.clickTaskEdit.unsubscribe();
  }*/
}
