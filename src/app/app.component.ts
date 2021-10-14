import { Component } from '@angular/core';
import {Dice} from "../models/yatzee/dice";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'App Root Component';
  firstApp = 'Première application Angular de la PE1 Clermont';
  dice: Dice = new Dice();
  headerColor: string = '#fc03a5';

  scores: Array<ScrabbleCount> = [
    { point: 1, alpha: ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'] },
    { point: 2, alpha: ['d', 'g'] },
    { point: 3, alpha: ['b', 'c', 'm', 'p'] },
    { point: 4, alpha: ['f', 'h', 'v', 'w', 'y'] },
    { point: 5, alpha: ['k'] },
    { point: 8, alpha: ['j', 'x'] },
    { point: 10, alpha: ['q', 'z'] },
  ];

  getTitle(): string {
    return this.title;
  }

  rerollDice(): void {
    this.dice = new Dice();
  }


  labelButton: string = 'Afficher Scores Scrabble';
  tableDisplayed: boolean = false;

  displayTable(): void {
    this.tableDisplayed = !this.tableDisplayed;
    if (this.tableDisplayed) {
      this.labelButton = 'Masquer Scores Scrabble'
    } else {
      this.labelButton = 'Afficher Scores Scrabble'
    }
  }

  getPointUnits(point: number): string {
    return point + 'pts';
  }

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

}

interface ScrabbleCount {
  point: number;
  alpha: Array<string>;
}

interface Student {
  name: string;
  grades: Array<number>;
}
