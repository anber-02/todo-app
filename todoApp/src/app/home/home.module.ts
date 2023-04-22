import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { TaskComponent } from '../components/task/task.component';
import { NewTaskComponent } from '../components/new-task/new-task.component';
import { SharedTodoModalContentComponent } from '../components/shared-todo-modal-content/shared-todo-modal-content.component';
import { TodoModalContentComponent } from '../components/todo-modal-content/todo-modal-content.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, TaskComponent, NewTaskComponent, SharedTodoModalContentComponent, TodoModalContentComponent]
})
export class HomePageModule {}
