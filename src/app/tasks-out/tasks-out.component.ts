import {Component, OnInit} from '@angular/core';
/*import { TASKS } from '../tasks';*/
import {TasksINPComponent} from './../tasks-inp/tasks-inp.component';
import {DateTransService} from '../date-trans.service';
import {Task} from '../task';

@Component({
  selector: 'app-tasks-out',
  templateUrl: './tasks-out.component.html',
  styleUrls: ['./tasks-out.component.css']
})
export class TasksOUTComponent implements OnInit {

  public tasks: Task[] = [];

  constructor(private dateTrans: DateTransService) {

  }

  ngOnInit(): void {
    /*this.dateTrans.fillTasks();
    this.dateTrans.tasksSubject.subscribe(tasks => this.tasks = tasks);*/

    this.dateTrans.task.subscribe((task: Task) => {
      this.tasks.push(this.handleTask(task));
      console.log(this.tasks);
    });
  }

  private handleTask(task: Task): Task {
    return {
      ...task,
      taskId: this.tasks.length + 1,
    };
  }
}
