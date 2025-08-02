import { Component, EventEmitter, Input, Output, inject} from '@angular/core';
import { TaskService } from '../task.service';
import { ITask } from './itask.model';

@Component({
  selector: 'app-task',
  standalone:false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class Task {
  @Input({required: true}) task!: ITask;
  @Output() complete = new EventEmitter<string>();
  private taskServie = inject(TaskService)

  onCompleteTask() {
   this.taskServie.removeTask(this.task.id);
  }
}
