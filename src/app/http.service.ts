import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Task} from './task';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get('user.json');
  }

  // хуйня нерабочая бля /////////////////////////////////////////////////////
 /* getData(): Observable<any>{
    return this.http.get('http://127.0.0.1:3000/items');
  }

  postData(task: Task): Observable<any>{
    const body = {
      taskId: task.taskId,
      taskName: task.taskName,
      taskPriority: task.taskPriority,
      taskIsOk: task.taskIsOk,
      taskVisible: task.taskVisible,
      taskTimeCreate: task.taskTimeCreate,
      taskTimeConfirm: task.taskTimeConfirm,
      taskTimeCancel: task.taskTimeCancel
    };
    return this.http.post('http://127.0.0.1:3000/items', body);
  }*/

/*  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//(GET)/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function gettasks() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://127.0.0.1:3000/items');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send();

    xhr.onload = function () {
      tasks = JSON.parse(xhr.response);
      reloadTasksFiltered();
      out();
    };
  };
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//(POST)////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function posttask(body) {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "http://127.0.0.1:3000/items");
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(body));

    xhr.onload = function() {
      tasks.push(JSON.parse(xhr.response));
      reloadTasksFiltered();
      out();
    };
  };
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//PUT///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//PUT http://127.0.0.1:3000/items/:itemId (обновление элементов)
function puttask(taskid, task) {
    let xhr = new XMLHttpRequest();
    xhr.open('PUT', 'http://127.0.0.1:3000/items/' + String(taskid));
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(task));
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//DELETE////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function deletetask(taskid) {
    let xhr = new XMLHttpRequest();
    xhr.open('DELETE', 'http://127.0.0.1:3000/items/' + String(taskid));
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send();

    tasks.forEach((param, i) => {
        if (param.id === taskid) {
            tasks.splice(i, 1);
        }
    })

    reloadTasksFiltered();
    out();
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/
/*
  putTask(taskId: number, task: Task) {
    const xhr = new XMLHttpRequest();
    xhr.open('PUT', 'http://127.0.0.1:3000/items/' + String(taskId));
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(task));
  };

  deleteTask(taskId: number) {
    let xhr = new XMLHttpRequest();
    xhr.open('DELETE', 'http://127.0.0.1:3000/items/' + String(taskId));
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send();

    tasks.forEach((param, i) => {
      if (param.id === taskid) {
        tasks.splice(i, 1);
      }
    })

    reloadTasksFiltered();
    out();
  }*/
}
