import { Injectable } from '@angular/core';
import {User} from "../models/user/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _arrayUser: Array<User> = [];

  constructor() {
    for (let i = 1; i <= 10; i++) {
      let user = new User();
      user.email = 'email-'+i+'@toto.fr';
      user.nickname = 'Supertoto'+i+'Du63';
      if (i%3 === 0) {
        user.lastName = 'TOTO-' + i;
        user.firstName = 'first-toto-' + i;
        user.address = i + ' rue des ' + i + ' TK';
        user.postalCode = '63000';
        user.city = 'Clermont-Ferrand';
      }
      this._arrayUser.push(user);
    }
  }

  get arrayUser(): Array<User> {
    return this._arrayUser;
  }


  addUser(user: User): void {
    this._arrayUser.push(user);
  }

  /**
   * On déclare une fonction de nom "findUserByEmail", qui a un paramètre de nom
   * "email" et de type "string"
   * La fonction renvoie soit un objet User, soit undefined
   *
   * @param email
   */
  findUserByEmail(email: string): User|undefined {
    // filter = créer un nouveau tableau, qui renvoie tous les éléments du tableau sur
    // lequel on le place, et qui remplisse les conditions de la fonction fléchée
    // ici c'est tous les utilisateurs dont l'email vaut l'email passé en paramètre
    const tmpArray = this._arrayUser.filter((user) => user.email === email);
    if (tmpArray.length > 0) {
      return tmpArray[0];
    }
    return undefined;
  }

}
