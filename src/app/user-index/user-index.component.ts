import { Component } from '@angular/core';
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";
import {User} from "../../models/user/user";

@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.scss']
})
export class UserIndexComponent {

  constructor(public userService: UserService, private router: Router) { }

  routerLinkUserAccount(user: User) {
    this.router.navigate(['users/' + user.email]);
  }
}
