import { Component } from '@angular/core';
import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  listTodos?:Todo[];
  idModal:string = 'people-button'

  sliderConfig = {
    spaceBetween:  1,
    slidesPerView: 1.7
  }


  constructor(private todoService:TodoService) {
    this.todoService.getTask().subscribe((data:Todo[]) => {
      this.listTodos = data
    })
  }

  getMensaje(e:any){
    console.log({e})
    this.idModal = e
  }
}
