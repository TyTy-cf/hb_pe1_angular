import { Component } from '@angular/core';
import {Dice} from "../models/yatzee/dice";
import {Yahtzee} from "../models/yatzee/yahtzee";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

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

  /***********************************************/
  /**************** Exo - Compteur ***************/
  /***********************************************/

  students: Array<Student> = [
    { name: 'Albert', grades: [12, 8, 9, 7, 13] },
    { name: 'Vincent', grades: [14, 13, 12, 11, 10] },
    { name: 'Michel', grades: [17, 16, 15, 18, 13] },
  ];

  calcAverage(arrayGrades: Array<number>): number {
    let sum: number = 0;
    for (const grade of arrayGrades) {
      sum += grade;
    }
    return sum / arrayGrades.length;
  }

  /***********************************************/
  /**************** Exo - Yahtzee ***************/
  /***********************************************/

  yatzee: Yahtzee = new Yahtzee();

}

interface Student {
  name: string;
  grades: Array<number>;
}
