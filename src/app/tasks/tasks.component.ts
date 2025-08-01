import { Component, Input } from '@angular/core';
import { dummyTasks } from '../dummy-tasks';
import { Task } from './task/task';

@Component({
  selector: 'app-tasks',
  imports: [Task],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() name!: string;
  @Input({required: true}) userId!: String;

  tasks =dummyTasks;
  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }
}
