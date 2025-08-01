import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from './new-task.model';

@Component({
  selector: 'app-new-task',
  imports: [ FormsModule ], //needed for ngModel
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>()
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';
  
  onCancel() {
      this.cancel.emit();
  }

  onSubmit() {
    const taskData: NewTaskData = {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      duedate: this.enteredDueDate  // Make sure this matches the interface
    };
  
    this.add.emit(taskData);
  }
}
