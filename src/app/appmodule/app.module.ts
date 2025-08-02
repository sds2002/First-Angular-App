import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
import { HeaderComponent } from '../header/header.component';
import { TasksComponent } from '../tasks/tasks.component';
import { UserComponent } from '../user/user.component';
import { BrowserModule } from '@angular/platform-browser'
import { NewTask } from '../tasks/new-task/new-task.component';
import { FormsModule } from '@angular/forms';
import { Task } from '../tasks/task/task.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [AppComponent, HeaderComponent, UserComponent, TasksComponent, Task, NewTask],
  bootstrap: [AppComponent],
  imports: [BrowserModule, FormsModule, SharedModule]
})
export class AppModule { }
