import { Component, EventEmitter, Output, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task.service';
import { type NewTaskData } from './new-task.model';

@Component({
  selector: 'app-new-task',
  imports: [ FormsModule ], //needed for ngModel
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';
  private taskService = inject(TaskService);
  
  onCancel() {
      this.close.emit();
  }

  onSubmit() {
   this.taskService.addTask({
    title: this.enteredTitle,
    summary: this.enteredSummary,
    duedate: this.enteredDueDate
   }, this.userId);
   this.close.emit();
  }
}
