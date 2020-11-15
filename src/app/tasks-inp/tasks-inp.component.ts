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
  // todo *При создании формы удобно использовать FormBuilder, почитать про него стоит, много времени не займёт
  FormTaskNameAndPtiority: FormGroup = new FormGroup({
    'taskName': new FormControl('', Validators.required),
    'taskPriority': new FormControl('high'),
  });
  // todo здесь при инициализации класса FormGroup прокидывается простой объект, почему названия полей в кавычках?)
  // todo Это по сути хуйня, но в разных проектах по-разному может быть настроен tslint,
  // todo однако при выгрузке реальной задачи, она может быть завёрнута интерпретатором по этой причине
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
    // ко всем элементам формгруппы можно также обращаться через this.someFormGroup.get('fcName), чуть меньше кода просто
    const task: Task = new Task(this.FormTaskNameAndPtiority.controls['taskName'].value, this.FormTaskNameAndPtiority.controls['taskPriority'].value, false);
    this.dateTrans.addTask(task);
    this.FormTaskNameAndPtiority.controls['taskName'].reset('');
  }

  public onClickSort(): void {
    this.dateTrans.clickSort(true);
  }
  // todo заменить кнопку на подписку на изменение формы
  public onClickCheck(): void {
    const filterStat: FilterStat = new FilterStat(this.FormFilterStat.controls['completed'].value, this.FormFilterStat.controls['high'].value, this.FormFilterStat.controls['normal'].value, this.FormFilterStat.controls['low'].value);
    this.dateTrans.changeFilterStat(filterStat);
  }
}
