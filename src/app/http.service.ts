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
    this.http.delete('http://127.0.0.1:3000/items/' + String(id));
  }

  public putData(id: number, task: Task): void {
    this.http.put('http://127.0.0.1:3000/items/' + String(id), task);
  }
}

/*  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//PUT///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//PUT http://127.0.0.1:3000/items/:itemId (обновление элементов)
function puttask(id, task) {
    let xhr = new XMLHttpRequest();
    xhr.open('PUT', 'http://127.0.0.1:3000/items/' + String(id));
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(task));
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//DELETE////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function deletetask(id) {
    let xhr = new XMLHttpRequest();
    xhr.open('DELETE', 'http://127.0.0.1:3000/items/' + String(id));
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send();

    tasks.forEach((param, i) => {
        if (param.id === id) {
            tasks.splice(i, 1);
        }
    })

    reloadTasksFiltered();
    out();
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

