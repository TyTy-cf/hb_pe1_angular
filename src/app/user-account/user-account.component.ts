import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})
export class UserAccountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Récupérer l'email passé par la route et récupérer le User qui correspond à cette route
  }

  editUser(): void {
    // passer un booléen à true, afin de masquer le récap des informations du user
    // et d'afficher un formulaire pour modifier le user
  }
}
