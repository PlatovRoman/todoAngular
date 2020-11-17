import {Component, OnInit} from '@angular/core';
import {DateTransService} from '../date-trans.service';
import {Task} from '../task';

@Component({
  selector: 'app-tasks-out',
  templateUrl: './tasks-out.component.html',
  styleUrls: ['./tasks-out.component.css']
})
export class TasksOUTComponent implements OnInit {
  public tasks: Task[] = [];
  public filterStat: string[] = [];
  constructor(private dateTrans: DateTransService) {
  }

  ngOnInit(): void {
    this.dateTrans.clickSaveEdit.subscribe((task: Task) => {
      this.tasks.forEach((oldTask) => {
        if (oldTask.taskId === task.taskId) {
          oldTask = task;
        }
      });
    });

    this.dateTrans.task.subscribe((task: Task) => {
      this.tasks.push(this.handleTask(task));
    });

    this.dateTrans.sort.subscribe((sort: boolean) => {
      this.tasks.reverse();
    });

    this.dateTrans.filterStat.subscribe((filterStat: string[]) => {
      this.filterStat = filterStat;
      this.tasks.forEach((task) => {
        task.taskVisible = false;
        if (filterStat.includes('isCompleted')){
          task.taskVisible = ((filterStat.includes(task.taskPriority) && task.taskIsOk) || (task.taskIsOk && (filterStat.length === 1)));
        } else if (filterStat.includes(task.taskPriority) || (filterStat.length === 0)){
          task.taskVisible = true;
        }
  });
  });
  }

  private handleTask(task: Task): Task {
    return {
      ...task,
      taskId: this.tasks.length,
    };
  }

  public onClickOk(id: number): void {
    this.tasks.forEach((task) => {
      if (task.taskId === id) {
        task.taskIsOk = true;
        task.taskTimeConfirm = new Date();
        task.taskTimeCancel = null;
      }
    });
  }

  public onClickNo(id: number): void {
    this.tasks.forEach((task) => {
      if (task.taskId === id) {
        task.taskIsOk = false;
        task.taskVisible = this.filterStat.includes('isCompleted') ? false : task.taskVisible;
        task.taskTimeCancel = new Date();
        task.taskTimeConfirm = null;
      }
    });
  }

  public onClickDelete(id: number): void {
    this.tasks.forEach((task, index) => {
      if (task.taskId === id) {
        this.tasks.splice(index, 1);
      }
    });
  }

  public onClickEdit(id: number): void {
    this.tasks.forEach((task, index) => {
      if (task.taskId === id) {
        this.dateTrans.clickEdit(task);
      }
    });
  }
}
