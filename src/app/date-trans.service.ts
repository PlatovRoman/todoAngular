import {Injectable} from '@angular/core';
import {Task} from './task';
import {FilterStat} from './filterStat';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DateTransService {

  public task = new Subject<Task>();
  public sort = new Subject<boolean>();
  public filterStat = new Subject<FilterStat>();

  constructor() {
  }

  public addTask(task: Task): void {
    this.task.next(task);
  }

  public clickSort(sort: boolean): void {
    this.sort.next(sort);
  }

  public changeFilterStat(filterStat: FilterStat): void {
    this.filterStat.next(filterStat);
  }
}
