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
  // todo !!!!!!!!!!!!
  // todo лучше все же избавиться от tasksFiltered, вызывает много повторного использования кода (generateTasksFiltered)
  // todo подумай сам как, если не получится, завтра разберём
  // todo !!!!!!!!!!!!
  public tasksFiltered: Task[] = [];

  constructor(private dateTrans: DateTransService) {
  }

  ngOnInit(): void {

    this.dateTrans.task.subscribe((task: Task) => {
      this.tasks.push(this.handleTask(task));
      this.generateTasksFiltered();
    });

    this.dateTrans.sort.subscribe((sort: boolean) => {
      this.tasksFiltered.reverse();
    });

    this.dateTrans.filterStat.subscribe((filterStat: FilterStat) => {
      // todo зачем хранить состояние фильтра в отдельной переменной?
      this.filterStatus = filterStat;
      // todo !!!!!!!!!!!!!!!!!!!!!!!прокинуть(не совсем понимаю, зачем... тогда ломается логика остального)
      this.generateTasksFiltered();
    });
  }

  private handleTask(task: Task): Task {
    return {
      ...task,
      taskId: this.tasks.length,
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
        task.taskTimeConfirm = new Date();
        task.taskTimeCancel = null;
      }
    });
    this.generateTasksFiltered();
  }

  public onClickNo(id: number): void {
    this.tasks.forEach((task) => {
      if (task.taskId === id) {
        task.taskIsOk = false;
        task.taskTimeCancel = new Date();
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
