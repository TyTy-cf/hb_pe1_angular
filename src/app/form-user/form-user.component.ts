import { Component } from '@angular/core';
import {User} from "../../models/user/user";

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss']
})
export class FormUserComponent {

  user: User = new User();

  minLength: number = 3;

  onSubmit(): void {
    console.log('Soumission du formulaire !');
    console.log(this.user);
  }

}
