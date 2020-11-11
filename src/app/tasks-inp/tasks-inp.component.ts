import {Component, OnInit} from '@angular/core';
import {Task} from '../task';
import {DateTransService} from '../date-trans.service';
/*import { Task } from '../task';*/
/*import { TASKS } from '../tasks';*/

/*class ITask {
  tasksName: string;
  taskPriority: string;
  taskIsOk: boolean;
}*/

@Component({
  selector: 'app-tasks-inp',
  templateUrl: './tasks-inp.component.html',
  styleUrls: ['./tasks-inp.component.css']
})
export class TasksINPComponent implements OnInit {

  taskName: string;
  taskPriority: string = 'high';

  constructor(private dateTrans: DateTransService) {
  }

  ngOnInit(): void {

  }

  public onClickAdd(): void {
    const task: Task = new Task(this.taskName, this.taskPriority, false);
    this.dateTrans.addTask(task);
  }
}
