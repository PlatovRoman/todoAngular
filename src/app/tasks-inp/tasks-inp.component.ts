import {Component, OnInit} from '@angular/core';
import {Task} from '../task';
import {FilterStat} from '../filterStat';
import {DateTransService} from '../date-trans.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-tasks-inp',
  templateUrl: './tasks-inp.component.html',
  styleUrls: ['./tasks-inp.component.css']
})
export class TasksINPComponent implements OnInit {
  FormTaskNameAndPtiority: FormGroup = new FormGroup({
    taskName: new FormControl('', Validators.required),
    taskPriority: new FormControl('high'),
  });
  FormFilterStat: FormGroup = new FormGroup({
    isCompleted: new FormControl(false),
    isHigh: new FormControl(false),
    isNormal: new FormControl(false),
    isLow: new FormControl(false)
  });

  constructor(private dateTrans: DateTransService) {
  }

  ngOnInit(): void {
    this.FormFilterStat.valueChanges.subscribe((value) => {
      this.dateTrans.changeFilterStat(value);
    });
  }

  public get inputControl(): FormControl {
    return this.FormTaskNameAndPtiority.get('taskName') as FormControl;
  }

  public onClickAdd(): void {
    const task: Task = {
      tasksName: this.FormTaskNameAndPtiority.get('taskName').value,
      taskPriority: this.FormTaskNameAndPtiority.get('taskPriority').value,
      taskIsOk: false,
      taskTimeCreate: new Date(),
    };
    this.dateTrans.addTask(task);
    this.FormTaskNameAndPtiority.get('taskName').reset('');
  }

  public onClickSort(): void {
    this.dateTrans.clickSort(true);
  }
}
