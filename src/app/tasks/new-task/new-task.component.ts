import { Component, EventEmitter, Output, inject, Input } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
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
