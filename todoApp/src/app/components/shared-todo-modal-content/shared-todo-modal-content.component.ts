import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from '../../services/todo.service';
@Component({
  selector: 'app-shared-todo-modal-content',
  templateUrl: './shared-todo-modal-content.component.html',
  styleUrls: ['./shared-todo-modal-content.component.scss'],
})
export class SharedTodoModalContentComponent implements OnInit {
  @Input() todo: Todo = new Todo();
  @Input() id:any
  author: any = {}
  sharedWith: any = {}

  constructor(private todoService: TodoService) { }
  
  ngOnInit() {
    this.todoService.getSharedTodos(this.todo.id).subscribe((data: any) => {
      this.author = data.author
      this.sharedWith = data.shared_with
    })
  }

}
