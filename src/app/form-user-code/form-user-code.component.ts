import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../models/user/user";
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-form-user-code',
  templateUrl: './form-user-code.component.html',
  styleUrls: ['./form-user-code.component.scss']
})
export class FormUserCodeComponent implements OnInit {

  userFormGroup!: FormGroup;
  user: User = new User();
  existingEmail: boolean = false;

  constructor(private userService: UserService, private router: Router) { }

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
        ),
        _lastName: new FormControl(
          this.user.lastName, []
        ),
        _firstName: new FormControl(
          this.user.firstName, []
        ),
        _address: new FormControl(
          this.user.address, []
        ),
        _postalCode: new FormControl(
          this.user.postalCode, []
        ),
        _city: new FormControl(
          this.user.city, []
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

  get lastName(): AbstractControl {
    return <AbstractControl>this.userFormGroup.get('_lastName');
  }

  get firstName(): AbstractControl {
    return <AbstractControl>this.userFormGroup.get('_firstName');
  }

  get address(): AbstractControl {
    return <AbstractControl>this.userFormGroup.get('_address');
  }

  get postalCode(): AbstractControl {
    return <AbstractControl>this.userFormGroup.get('_postalCode');
  }

  get city(): AbstractControl {
    return <AbstractControl>this.userFormGroup.get('_city');
  }

  onSubmit(): void {
    if (this.userService.findUserByEmail(this.email.value) === undefined) {
      this.user.nickname = this.nickname.value;
      this.user.email = this.email.value;
      this.user.lastName = this.lastName.value;
      this.user.firstName = this.firstName.value;
      this.user.address = this.address.value;
      this.user.postalCode = this.postalCode.value;
      this.user.city = this.city.value;
      this.userService.addUser(this.user);
      this.router.navigate(['/users']);
    } else {
      this.existingEmail = true;
    }
  }
}
