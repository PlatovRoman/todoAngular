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

  constructor(private dateTrans: DateTransService) {
  }

  ngOnInit(): void {

    this.dateTrans.task.subscribe((task: Task) => {
      this.tasks.push(this.handleTask(task));
    });

    this.dateTrans.sort.subscribe((sort: boolean) => {
      this.tasks.reverse();
    });

    this.dateTrans.filterStat.subscribe((filterStat: FilterStat) => {
      this.tasks.forEach((task) => {
        task.taskVisible = false;
        if (filterStat.isCompleted) {
          if (task.taskIsOk && task.taskPriority === 'high' && filterStat.isHigh) {
            task.taskVisible = true;
          }
          if (task.taskIsOk && task.taskPriority === 'normal' && filterStat.isNormal) {
            task.taskVisible = true;
          }
          if (task.taskIsOk && task.taskPriority === 'low' && filterStat.isLow) {
            task.taskVisible = true;
          }
          if (task.taskIsOk && !(filterStat.isHigh || filterStat.isNormal || filterStat.isLow)) {
            task.taskVisible = true;
          }
        } else {
          if (task.taskPriority === 'high' && filterStat.isHigh) {
            task.taskVisible = true;
          }
          if (task.taskPriority === 'normal' && filterStat.isNormal) {
            task.taskVisible = true;
          }
          if (task.taskPriority === 'low' && filterStat.isLow) {
            task.taskVisible = true;
          }
          if (!(filterStat.isHigh || filterStat.isNormal || filterStat.isLow)) {
            task.taskVisible = true;
          }
        }
      });
    });
  }

  private handleTask(task: Task): Task {
    return {
      ...task,
      taskId: this.tasks.length,
     // taskVisible: this.generateTasksFiltered(this.filterStatus),
    };
  }

  /*public generateTasksFiltered(filterStat: FilterStat): void {
    this.tasks.forEach((task) => {
      if (filterStat.isCompleted) {
        if (task.taskIsOk && task.taskPriority === 'high' && filterStat.isHigh) {
          task.taskVisible = true;
        }
        if (task.taskIsOk && task.taskPriority === 'normal' && filterStat.isNormal) {
          task.taskVisible = true;
        }
        if (task.taskIsOk && task.taskPriority === 'low' && filterStat.isLow) {
          task.taskVisible = true;
        }
        if (task.taskIsOk && !(filterStat.isHigh || filterStat.isNormal || filterStat.isLow)) {
          task.taskVisible = true;
        }
      } else {
        if (task.taskPriority === 'high' && filterStat.isHigh) {
          task.taskVisible = true;
        }
        if (task.taskPriority === 'normal' && filterStat.isNormal) {
          task.taskVisible = true;
        }
        if (task.taskPriority === 'low' && filterStat.isLow) {
          task.taskVisible = true;
        }
        if (!(filterStat.isHigh || filterStat.isNormal || filterStat.isLow)) {
          task.taskVisible = true;
        }
      }
    });
  }*/

  public onClickOk(id: number): void {
    this.tasks.forEach((task) => {
      if (task.taskId === id) {
        task.taskIsOk = true;
        task.taskTimeConfirm = new Date();
        task.taskTimeCancel = null;
      }
    });
    //this.generateTasksFiltered();
  }

  public onClickNo(id: number): void {
    this.tasks.forEach((task) => {
      if (task.taskId === id) {
        task.taskIsOk = false;
        task.taskTimeCancel = new Date();
        task.taskTimeConfirm = null;
      }
    });
   // this.generateTasksFiltered();
  }

  public onClickDelete(id: number): void {
    this.tasks.forEach((task, index) => {
      if (task.taskId === id) {
        this.tasks.splice(index, 1);
      }
    });
   // this.generateTasksFiltered();
  }
}
