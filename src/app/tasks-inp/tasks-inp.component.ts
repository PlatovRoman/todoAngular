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
  // todo (ответ) я про него ччитал, но просто сделал тревиально... насколько понял, выигрыша большого нет. просто альтернатиный способ
  FormTaskNameAndPtiority: FormGroup = new FormGroup({
    taskName: new FormControl('', Validators.required),
    taskPriority: new FormControl('high'),
  });
  // todo здесь при инициализации класса FormGroup прокидывается простой объект, почему названия полей в кавычках?)
  // todo Это по сути хуйня, но в разных проектах по-разному может быть настроен tslint,
  // todo однако при выгрузке реальной задачи, она может быть завёрнута интерпретатором по этой причине
  // todo (ответ) кавычки убрал
  FormFilterStat: FormGroup = new FormGroup({
    completed: new FormControl(false),
    high: new FormControl(false),
    normal: new FormControl(false),
    low: new FormControl(false)
  });

  constructor(private dateTrans: DateTransService) {
  }

  ngOnInit(): void {
  }

  public get inputControl(): FormControl {
    return this.FormTaskNameAndPtiority.get('taskName') as FormControl;
  }

  public onClickAdd(): void {
    // todo ко всем элементам формгруппы можно также обращаться через this.someFormGroup.get('taskName'), чуть меньше кода просто
    // todo (ответ) изменил
    const task: Task = new Task(this.FormTaskNameAndPtiority.get('taskName').value, this.FormTaskNameAndPtiority.get('taskPriority').value, false);
    this.dateTrans.addTask(task);
    this.FormTaskNameAndPtiority.get('taskName').reset('');
  }

  public onClickSort(): void {
    this.dateTrans.clickSort(true);
  }
  // todo заменить кнопку на подписку на изменение формы
  public onClickCheck(): void {
    const filterStat: FilterStat = new FilterStat(this.FormFilterStat.get('completed').value, this.FormFilterStat.get('high').value, this.FormFilterStat.get('normal').value, this.FormFilterStat.get('low').value);
    this.dateTrans.changeFilterStat(filterStat);
  }
}
