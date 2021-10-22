import {AfterViewInit, Component, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-compteur',
  templateUrl: './compteur.component.html',
  styleUrls: ['./compteur.component.scss']
})
export class CompteurComponent implements AfterViewInit, OnDestroy {

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

  ngAfterViewInit(): void {
    document.querySelector('body')!.classList.add('blue-duck');
  }

  ngOnDestroy(): void {
    document.querySelector('body')!.classList.remove('blue-duck');
  }

}
