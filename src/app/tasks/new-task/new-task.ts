import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [ FormsModule ], //needed for ngModel
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {
  @Output() cancel = new EventEmitter<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';
  
  onCancel() {
      this.cancel.emit();
  }
}
