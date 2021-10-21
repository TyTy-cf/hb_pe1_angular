import { Component } from '@angular/core';
import {User} from "../../models/user/user";
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss']
})
export class FormUserComponent {

  user: User = new User();
  minLength: number = 3;

  constructor(private userService: UserService, private router: Router) {
  }

  onSubmit(): void {
    this.userService.addUser(this.user);
    this.router.navigate(['/users']);
  }

}
