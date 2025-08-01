import { Component, EventEmitter, Input, Output, inject} from '@angular/core';
import { ITask } from './itask.model';
import { CardComponent } from "src/app/shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
  @Input({required: true}) task!: ITask;
  @Output() complete = new EventEmitter<string>();
  private taskServie = inject(TaskService)

  onCompleteTask() {
   this.taskServie.removeTask(this.task.id);
  }
}
