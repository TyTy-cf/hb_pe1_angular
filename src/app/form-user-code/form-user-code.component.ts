import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../models/user/user";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-form-user-code',
  templateUrl: './form-user-code.component.html',
  styleUrls: ['./form-user-code.component.scss']
})
export class FormUserCodeComponent implements OnInit {

  userFormGroup!: FormGroup;
  user: User = new User();
  existingEmail: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userFormGroup = new FormGroup(
      {
        _nickname: new FormControl(
          this.user.nickname, [
            Validators.required, Validators.minLength(5)
          ]
        ),
        _email: new FormControl(
          this.user.email, [
            Validators.required
          ]
        )
      }
    );
  }

  get nickname(): AbstractControl {
    return <AbstractControl>this.userFormGroup.get('_nickname');
  }

  get email(): AbstractControl {
    return <AbstractControl>this.userFormGroup.get('_email');
  }

  onSubmit(): void {
    if (this.userService.findUserByEmail(this.email.value) === undefined) {
      this.user.nickname = this.nickname.value;
      this.user.email = this.email.value;
      this.userService.addUser(this.user);
      console.log(this.userService.arrayUser);
    } else {
      this.existingEmail = true;
    }
  }
}
