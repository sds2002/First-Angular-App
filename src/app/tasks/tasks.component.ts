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

  @Input() name!: string;
  @Input({required: true}) userId!: string;
  isAddingTask:boolean =false;

  tasks =dummyTasks;
  get selectedUserTasks() {
    return 
  }

  onCompleteTask(id: string) {
    
  }

  OnStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskData) {
  
    this.isAddingTask = false;
  }

}
