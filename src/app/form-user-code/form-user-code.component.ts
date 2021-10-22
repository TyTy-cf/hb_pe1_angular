import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../models/user/user";
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";
import {CountryService} from "../../service/country.service";

@Component({
  selector: 'app-form-user-code',
  templateUrl: './form-user-code.component.html',
  styleUrls: ['./form-user-code.component.scss']
})
export class FormUserCodeComponent implements OnInit {

  @Input()
  user: User = new User();

  @Input()
  isEditMode: boolean = false;

  @Output()
  eventIsEdition: EventEmitter<boolean> = new EventEmitter<boolean>();

  userFormGroup!: FormGroup;
  existingEmail: boolean = false;

  constructor(
    private userService: UserService,
    public countryService: CountryService,
    private router: Router
  ) { }

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
        ),
        _country: new FormControl(
          this.user.country, []
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

  get country(): AbstractControl {
    return <AbstractControl>this.userFormGroup.get('_country');
  }

  onSubmit(): void {
    if (this.userService.findUserByEmail(this.email.value) === undefined || this.isEditMode) {
      this.user.nickname = this.nickname.value;
      this.user.email = this.email.value;
      this.user.lastName = this.lastName.value;
      this.user.firstName = this.firstName.value;
      this.user.address = this.address.value;
      this.user.postalCode = this.postalCode.value;
      this.user.city = this.city.value;
      this.user.country = this.country.value;
      // this.isEditMode => provient de l'input du parent, par défaut est false
      if (this.isEditMode) {
        // si nous sommes en édition, on remonte l'info au parent qu'il doit réafficher
        // les infos du user
        this.eventIsEdition.emit(false);
      } else {
        // On est en création, donc on sauve notre nouvel utilisateur
        // Et on retourne à la vue des users
        this.userService.addUser(this.user);
        this.router.navigate(['/users']);
      }
    } else {
      this.existingEmail = true;
    }
  }
}
