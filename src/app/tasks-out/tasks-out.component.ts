import {Component, OnInit} from '@angular/core';
import {DateTransService} from '../date-trans.service';
import {Task} from '../task';
import {FilterStat} from '../filterStat';

@Component({
  selector: 'app-tasks-out',
  templateUrl: './tasks-out.component.html',
  styleUrls: ['./tasks-out.component.css']
})
export class TasksOUTComponent implements OnInit {

  public tasks: Task[] = [];

  public filterStatus: FilterStat = {
    isCompleted: false,
    isHigh: false,
    isNormal: false,
    isLow: false
  };

  public tasksFiltered: Task[] = [];

  constructor(private dateTrans: DateTransService) {
  }

  ngOnInit(): void {

    this.dateTrans.task.subscribe((task: Task) => {
      this.tasks.push(this.handleTask(task));
      this.generateTasksFiltered();
      // console.log(this.tasks);
      // console.log(this.tasksFiltered);
    });

    this.dateTrans.sort.subscribe((sort: boolean) => {
      this.tasksFiltered.reverse();
      // console.log(this.tasks);
    });

    this.dateTrans.filterStat.subscribe((filterStat: FilterStat) => {
      this.filterStatus = filterStat;
      this.generateTasksFiltered();
      // console.log(this.filterStatus);
    });
  }

  private handleTask(task: Task): Task {
    const time = new Date().toLocaleTimeString('ru-RU', {timeZone: 'Europe/Moscow'});
    const date = new Date().toLocaleDateString('ru-RU', {timeZone: 'Europe/Moscow'});
    // console.log(time);
    // console.log(date);
    return {
      ...task,
      taskId: this.tasks.length,
      taskTimeCreate: 'Time: ' + time + '⌚ Date: ' + date,
    };
  }

  public generateTasksFiltered(): void {
    this.tasksFiltered = [];
    this.tasks.forEach((task) => {
      if (this.filterStatus.isCompleted) {
        if (task.taskIsOk && task.taskPriority === 'high' && this.filterStatus.isHigh) {
          this.tasksFiltered.push(task);
        }
        if (task.taskIsOk && task.taskPriority === 'normal' && this.filterStatus.isNormal) {
          this.tasksFiltered.push(task);
        }
        if (task.taskIsOk && task.taskPriority === 'low' && this.filterStatus.isLow) {
          this.tasksFiltered.push(task);
        }
        if (task.taskIsOk && !(this.filterStatus.isHigh || this.filterStatus.isNormal || this.filterStatus.isLow)) {
          this.tasksFiltered.push(task);
        }
      } else {
        if (task.taskPriority === 'high' && this.filterStatus.isHigh) {
          this.tasksFiltered.push(task);
        }
        if (task.taskPriority === 'normal' && this.filterStatus.isNormal) {
          this.tasksFiltered.push(task);
        }
        if (task.taskPriority === 'low' && this.filterStatus.isLow) {
          this.tasksFiltered.push(task);
        }
        if (!(this.filterStatus.isHigh || this.filterStatus.isNormal || this.filterStatus.isLow)) {
          this.tasksFiltered.push(task);
        }
      }
    });
  }

  public onClickOk(id: number): void {
    this.tasks.forEach((task) => {
      if (task.taskId === id) {
        task.taskIsOk = true;
        const time = new Date().toLocaleTimeString('ru-RU', {timeZone: 'Europe/Moscow'});
        const date = new Date().toLocaleDateString('ru-RU', {timeZone: 'Europe/Moscow'});
        task.taskTimeConfirm = 'TimeConfirm: ' + time + '⌚ Date: ' + date;
        task.taskTimeCancel = null;
      }
    });
    this.generateTasksFiltered();
  }

  public onClickNo(id: number): void {
    this.tasks.forEach((task) => {
      if (task.taskId === id) {
        task.taskIsOk = false;
        const time = new Date().toLocaleTimeString('ru-RU', {timeZone: 'Europe/Moscow'});
        const date = new Date().toLocaleDateString('ru-RU', {timeZone: 'Europe/Moscow'});
        task.taskTimeCancel = 'TimeCancel: ' + time + '⌚ Date: ' + date;
        task.taskTimeConfirm = null;
      }
    });
    this.generateTasksFiltered();
  }

  public onClickDelete(id: number): void {
    this.tasks.forEach((task, index) => {
      if (task.taskId === id) {
        this.tasks.splice(index, 1);
      }
    });
    this.generateTasksFiltered();
  }
}
