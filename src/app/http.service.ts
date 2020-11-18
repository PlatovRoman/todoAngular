import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Task} from './task';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public responseServer: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private http: HttpClient) {
  }

  public getData(): Observable<any> {
    return this.http.get('http://127.0.0.1:3000/items');
  }

  public postData(task: Task): void {
    this.http.post('http://127.0.0.1:3000/items', task)
      .subscribe((newTask: Task) => this.responseServer.next(newTask));
  }

  public deleteData(id: number): void {
    this.http.delete('http://127.0.0.1:3000/items/' + String(id)).subscribe();
  }

  public putData(id: number, task: Task): void {
    this.http.put('http://127.0.0.1:3000/items/' + String(id), task).subscribe();
  }
}
