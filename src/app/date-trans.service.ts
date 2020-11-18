import {Injectable} from '@angular/core';
import {Task} from './task';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DateTransService {

  public sort = new Subject<boolean>();
  public filterStat = new Subject<string[]>();
  public clickTaskEdit: BehaviorSubject<any> = new BehaviorSubject(null);
  public clickSaveEdit: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() {
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
