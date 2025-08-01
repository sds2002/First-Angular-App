import { Component, computed, Input } from '@angular/core';
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

  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;


  get imagePath() {
    return 'assets/users/' + this.avatar;
  }


  onSelectUser() {
  }
}
