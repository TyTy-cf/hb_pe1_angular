import { Component } from '@angular/core';
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.scss']
})
export class UserIndexComponent {

  constructor(public userService: UserService) { }

}
