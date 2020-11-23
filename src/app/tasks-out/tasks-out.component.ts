import {Component, OnInit, OnDestroy} from '@angular/core';
import {DateTransService} from '../date-trans.service';
import {Task} from '../task';
import {HttpService} from '../http.service';
import {HttpClient} from '@angular/common/http';
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-tasks-out',
  templateUrl: './tasks-out.component.html',
  styleUrls: ['./tasks-out.component.css'],

})
export class TasksOUTComponent implements OnInit, OnDestroy {
  public tasks: Task[] = [];
  public filterStat: string[] = [];
  public unsub$$: Subject<any> = new Subject();
  constructor(private dateTrans: DateTransService, private httpService: HttpService, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.httpService.getData().subscribe((data: Task[]) => this.tasks = data);
    this.httpService.responseServerNewTask$.pipe(takeUntil(this.unsub$$)).subscribe((newTask: Task) => {
      if (newTask != null) {
        this.tasks.push(newTask);
      }
    });

    this.dateTrans.sort$.pipe(takeUntil(this.unsub$$)).subscribe((sort: boolean) => {
      this.tasks.reverse();
    });

    this.dateTrans.filterStat$.pipe(takeUntil(this.unsub$$)).subscribe((filterStat: string[]) => {
      this.filterStat = filterStat;
      this.tasks.forEach((task) => {
        task.taskVisible = false;
        if (filterStat.includes('isCompleted')) {
          task.taskVisible = ((filterStat.includes(task.taskPriority) && task.taskIsOk) || (task.taskIsOk && (filterStat.length === 1)));
        } else if (filterStat.includes(task.taskPriority) || (filterStat.length === 0)) {
          task.taskVisible = true;
        }
      });
    });
  }

  public onClickOk(id: number): void {
    this.tasks.forEach((task) => {
      if (task.id === id) {
        task.taskIsOk = true;
        task.taskTimeConfirm = new Date();
        task.taskTimeCancel = null;
        this.httpService.putData(id, task);
      }
    });
  }

  public onClickNo(id: number): void {
    this.tasks.forEach((task) => {
      if (task.id === id) {
        task.taskIsOk = false;
        task.taskVisible = this.filterStat.includes('isCompleted') ? false : task.taskVisible;
        task.taskTimeCancel = new Date();
        task.taskTimeConfirm = null;
        this.httpService.putData(id, task);
      }
    });
  }

  public onClickDelete(id: number): void {
    this.httpService.deleteData(id);
    this.tasks.forEach((task, index) => {
      if (task.id === id) {
        this.tasks.splice(index, 1);
      }
    });
  }

  public onClickEdit(id: number): void {
    this.tasks.forEach((task, index) => {
      if (task.id === id) {
        this.dateTrans.clickEdit(task);
      }
    });
  }

  ngOnDestroy(): void {
    this.unsub$$.next();
    this.unsub$$.complete();
  }
}
