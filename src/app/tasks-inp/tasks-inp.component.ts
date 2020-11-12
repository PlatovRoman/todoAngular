import {Component, OnInit} from '@angular/core';
import {Task} from '../task';
import {DateTransService} from '../date-trans.service';

import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-tasks-inp',
  templateUrl: './tasks-inp.component.html',
  styleUrls: ['./tasks-inp.component.css']
})
export class TasksINPComponent implements OnInit {

  myForm: FormGroup = new FormGroup({
    'taskName': new FormControl('', Validators.required),
    'taskPriority': new FormControl('high'),
  });

  /*taskName: string;
  taskPriority: string = 'high';*/

  constructor(private dateTrans: DateTransService) {

  }

  ngOnInit(): void {
  }



  public get inputControl(): FormControl {
      return this.myForm.get('taskName') as FormControl;
    }
  public onClickAdd(): void {
    const task: Task = new Task(this.myForm.controls['taskName'].value, this.myForm.controls['taskPriority'].value, false);
    this.dateTrans.addTask(task);
    this.myForm.controls['taskName'].reset('');
  }

  public onClickSort(): void {
    this.dateTrans.clickSort(true);
  }
}
