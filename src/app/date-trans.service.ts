import {Injectable} from '@angular/core';
import {Task} from './task';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DateTransService {
 /* public tasksSubject = new BehaviorSubject<Task[]>(null);*/
  public task = new Subject<Task>();

  constructor() {
  }

 /* public fillTasks() {
    this.tasksSubject.next(TASKS);
  }*/

  public addTask(task: Task): void {
    this.task.next(task);
  }
}
