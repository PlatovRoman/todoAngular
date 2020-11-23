import {Injectable} from '@angular/core';
import {Task} from './task';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DateTransService {
  public sort$$: Subject<boolean> = new Subject<boolean>();
  public sort$: Observable<boolean> = this.sort$$.asObservable();

  public filterStat$$: Subject<string[]> = new Subject<string[]>();
  public filterStat$: Observable<string[]> = this.filterStat$$.asObservable();

  public clickTaskEdit$$: BehaviorSubject<any> = new BehaviorSubject(null);
  public clickTaskEdit$: Observable<Task> = this.clickTaskEdit$$.asObservable();

  constructor() {
  }

  public clickSort(sort: boolean): void {
    this.sort$$.next(sort);
  }

  public changeFilterStat(filterStat: string[]): void {
    this.filterStat$$.next(filterStat);
  }

  public clickEdit(task: Task): void {
    this.clickTaskEdit$$.next(task);
  }
}
