import { Component, EventEmitter, Input, Output} from '@angular/core';
import { ITask } from './itask.model';
import { CardComponent } from "src/app/shared/card/card.component";

@Component({
  selector: 'app-task',
  imports: [CardComponent],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
  @Input({required: true}) task!: ITask;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    this.complete.emit(this.task.id);
  }
}
