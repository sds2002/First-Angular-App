import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DUMMY_USERS } from '../dummy-users';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  @Input() avatar!: string;
  @Input() name!: string;

  getImagePath() {
    return 'assets/user' + this.avatar;
  }

  onSelectUser() {
  }
}
