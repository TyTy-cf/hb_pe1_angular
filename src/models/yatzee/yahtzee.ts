import {Dice} from "./dice";

export class Yahtzee {

  private _myDice: Array<Dice> = [];
  private _round: number = 0;

  throwDice(): void {
    this._myDice = [];
    for (let i = 1; i <= 5; i++) {
      this._myDice.push(new Dice());
    }
    this.round++;
  }

  get round(): number {
    return this._round;
  }

  set round(value: number) {
    this._round = value;
  }

  /**
   * Fonction permettant de relancer les dés selectionnés
   * (Ou les non-sélectionnés, au choix...)
   */
  rerollDice(): void {
    // parcourir le tableau de dés
    for (const index in this._myDice) {
      // si mon dé est sélectionné
      if (this._myDice[index].isSelected) {
        // je re-créé le dé
        this._myDice[index] = new Dice();
      }
    }
  }

  get myDice(): Array<Dice> {
    return this._myDice;
  }

}
