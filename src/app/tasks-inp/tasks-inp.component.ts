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
    'taskName': new FormControl('', Validators.required),
    'taskPriority': new FormControl('high'),
  });

  FormFilterStat: FormGroup = new FormGroup({
    'completed': new FormControl(false),
    'high': new FormControl(false),
    'normal': new FormControl(false),
    'low': new FormControl(false)
  });

  constructor(private dateTrans: DateTransService) {
  }

  ngOnInit(): void {
  }

  public get inputControl(): FormControl {
    return this.FormTaskNameAndPtiority.get('taskName') as FormControl;
  }

  public onClickAdd(): void {
    const task: Task = new Task(this.FormTaskNameAndPtiority.controls['taskName'].value, this.FormTaskNameAndPtiority.controls['taskPriority'].value, false);
    this.dateTrans.addTask(task);
    this.FormTaskNameAndPtiority.controls['taskName'].reset('');
  }

  public onClickSort(): void {
    this.dateTrans.clickSort(true);
  }

  public onClickCheck(): void {
    const filterStat: FilterStat = new FilterStat(this.FormFilterStat.controls['completed'].value, this.FormFilterStat.controls['high'].value, this.FormFilterStat.controls['normal'].value, this.FormFilterStat.controls['low'].value);
    this.dateTrans.changeFilterStat(filterStat);
  }
}
