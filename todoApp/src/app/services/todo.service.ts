import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Todo } from '../models/todo';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http:HttpClient) { }

  getTask():Observable<Todo[]>{
    return this.http.get<Todo[]>(`${environment.API_URL}/todos/1`)
  }

  getSharedTodos(id: any){
    return this.http.get(`${environment.API_URL}/todos/shared_todos/${id}`)
  }
}
