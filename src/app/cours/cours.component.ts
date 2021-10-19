import {Component} from '@angular/core';
import {Dice} from "../../models/yatzee/dice";
import {ScrabbleCount} from "../../models/interface/scrabble_count";

@Component({
  selector: 'app-cours-bases',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.scss']
})
export class CoursComponent {

  title = 'App Cours Component';
  dice: Dice = new Dice(20);

  constructor() {
    console.log('Dans le constructor');
  }

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
    this.dice = new Dice(20);
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

}
