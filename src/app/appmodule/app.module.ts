import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
import { HeaderComponent } from '../header/header.component';
import { TasksComponent } from '../tasks/tasks.component';
import { UserComponent } from '../user/user.component';
import { BrowserModule } from '@angular/platform-browser'
import { NewTask } from '../tasks/new-task/new-task.component';
import { CardComponent } from '../shared/card/card.component';
import { FormsModule } from '@angular/forms';
import { Task } from '../tasks/task/task.component';



@NgModule({
  declarations: [AppComponent, HeaderComponent, UserComponent, TasksComponent, Task, NewTask, CardComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, FormsModule]
})
export class AppModule { }
