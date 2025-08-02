import { Component, Input } from '@angular/core';
import { dummyTasks } from '../dummy-tasks';
import { TaskService } from './task.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
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
