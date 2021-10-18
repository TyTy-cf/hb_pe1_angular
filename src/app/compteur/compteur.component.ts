import { Component } from '@angular/core';

@Component({
  selector: 'app-compteur',
  templateUrl: './compteur.component.html',
  styleUrls: ['./compteur.component.scss']
})
export class CompteurComponent {

  /***********************************************/
  /**************** Exo - Compteur ***************/
  /***********************************************/

  compteur: number = 0;

  reset(): void {
    this.compteur = 0
  }

  add(value: number): void {
    this.compteur += value;
  }

}
