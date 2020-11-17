import {Injectable} from '@angular/core';
import {Task} from './task';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DateTransService {

  public task = new Subject<Task>();
  public sort = new Subject<boolean>();
  public filterStat = new Subject<string[]>();
  public clickTaskEdit = new Subject<Task>();
  public clickSaveEdit = new Subject<Task>();

  constructor() {
  }

  public addTask(task: Task): void {
    this.task.next(task);
  }

  public clickSort(sort: boolean): void {
    this.sort.next(sort);
  }

  public changeFilterStat(filterStat: string[]): void {
    this.filterStat.next(filterStat);
  }

  public clickEdit(task: Task): void {
    this.clickTaskEdit.next(task);
  }

  public clickSave(task: Task): void {
    this.clickSaveEdit.next(task);
  }
}
