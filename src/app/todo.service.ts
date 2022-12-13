import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { count } from 'console';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http : HttpClient) { }

  getToDo(): Observable<any> {
    const url = 'https://jsonplaceholder.typicode.com/todos'
    return this.http.get<any>(url);
  }
}
