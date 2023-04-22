import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-modal-content',
  templateUrl: './todo-modal-content.component.html',
  styleUrls: ['./todo-modal-content.component.scss'],
})
export class TodoModalContentComponent implements OnInit {
  @Input() todo: Todo = new Todo();
  constructor() { }

  ngOnInit() {}

}
