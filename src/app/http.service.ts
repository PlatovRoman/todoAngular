import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Task} from './task';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public responseServerNewTask$$: BehaviorSubject<Task> = new BehaviorSubject(null);
  public responseServerNewTask$: Observable<Task> = this.responseServerNewTask$$.asObservable();

  constructor(private http: HttpClient) {
  }

  public getData(): Observable<any> {
    return this.http.get('http://127.0.0.1:3000/items');
  }

  public postData(task: Task): void {
    this.http.post('http://127.0.0.1:3000/items', task)
      .toPromise().then((newTask: Task) => this.responseServerNewTask$$.next(newTask));
  }

  public deleteData(id: number): void {
    this.http.delete('http://127.0.0.1:3000/items/' + String(id)).toPromise().then();
  }

  public putData(id: number, task: Task): void {
    this.http.put('http://127.0.0.1:3000/items/' + String(id), task).toPromise().then();
  }
}
