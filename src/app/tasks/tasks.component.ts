import { Component, Input } from '@angular/core';
import { dummyTasks } from '../dummy-tasks';
import { NewTask } from './new-task/new-task';
import { Task } from './task/task';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() name!: string;
  @Input({required: true}) userId!: String;
  isAddingTask:boolean =false;

  tasks =dummyTasks;
  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  OnStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }
}
