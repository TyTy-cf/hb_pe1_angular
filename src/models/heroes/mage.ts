import {Hero} from "./hero";

export class Mage extends Hero{

  constructor(name: string) {
    super(name, 300, 52, 58, 2);
  }

  levelUp(): void {
    // super est le mot clé pour appeler le comportement de la mère
    super.levelUp();
    this._hitPoint += 25;
    this._damageMin += 4;
    this._damageMax += 4;
    if (this._level%5 === 0) {
      this._defense += 1;
    }
  }

}
