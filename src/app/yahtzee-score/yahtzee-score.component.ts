import { Component, OnInit } from '@angular/core';
import {Yahtzee} from "../../models/yatzee/yahtzee";

@Component({
  selector: 'app-yahtzee-score',
  templateUrl: './yahtzee-score.component.html',
  styleUrls: ['./yahtzee-score.component.scss']
})
export class YahtzeeScoreComponent implements OnInit {

  round: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  getYahtzeeRound(yahtzee: Yahtzee) {
    this.round = yahtzee.round;
  }
}
