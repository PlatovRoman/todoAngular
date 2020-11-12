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

  constructor(private dateTrans: DateTransService) {

  }

  ngOnInit(): void {
    /*this.dateTrans.fillTasks();
    this.dateTrans.tasksSubject.subscribe(tasks => this.tasks = tasks);*/

    this.dateTrans.task.subscribe((task: Task) => {
      this.tasks.push(this.handleTask(task));
      console.log(this.tasks);
    });

    this.dateTrans.sort.subscribe((sort: boolean) => {
      this.tasks.reverse();
      console.log(this.tasks);
    });
  }

  private handleTask(task: Task): Task {
    const time = new Date().toLocaleTimeString('ru-RU', { timeZone: 'Europe/Moscow' });
    const date = new Date().toLocaleDateString('ru-RU', { timeZone: 'Europe/Moscow' });
    console.log(time);
    console.log(date);
    return {
      ...task,
      taskId: this.tasks.length,
      taskTimeCreate: 'Time: ' + time + '⌚ Date: ' + date,
    };
  }
}
