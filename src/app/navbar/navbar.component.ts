import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  darkMode: boolean = false;

  lightDark(): void {
    this.darkMode = !this.darkMode;
    if (this.darkMode) {
      document.querySelector('body')!.classList.add('blue-duck');
    } else {
      document.querySelector('body')!.classList.remove('blue-duck');
    }
  }
}
