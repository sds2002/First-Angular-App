import { Component, Input } from '@angular/core';
import { dummyTasks } from '../dummy-tasks';
import { NewTask } from './new-task/new-task';
import { NewTaskData } from './new-task/new-task.model';
import { Task } from './task/task';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
OnAddTask() {
throw new Error('Method not implemented.');
}
  @Input() name!: string;
  @Input({required: true}) userId!: string;
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

  onAddTask(taskData: NewTaskData) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.duedate
    })
    this.isAddingTask = false;
  }

}
