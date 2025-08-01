import { Component, Input } from '@angular/core';
import { dummyTasks } from '../dummy-tasks';
import { NewTask } from './new-task/new-task';
import { NewTaskData } from './new-task/new-task.model';
import { TaskService } from './task.service';
import { Task } from './task/task';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input() name!: string;
  @Input({required: true}) userId!: string;
  isAddingTask:boolean =false;

  constructor(private taskService: TaskService) {
  }

  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.userId);
  }

  OnStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

}
