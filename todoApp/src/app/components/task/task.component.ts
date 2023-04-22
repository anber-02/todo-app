import { Component, OnInit,Input, Output,EventEmitter} from '@angular/core';
import { Todo } from 'src/app/models/todo';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input() todo:Todo = new Todo()
  @Output() getId = new EventEmitter<string>()
  id:any
  openModal:boolean = false
  constructor() { }

  ngOnInit() {}

  verCheck(todo:Todo){
    console.log(todo)
  }
  obtenerId(e:any){   
    console.log(this.id)
    this.id = e.target.id
    console.log(this.id)
    this.openModal = !this.openModal
  }
}
