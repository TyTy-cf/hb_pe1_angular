import {Piece} from "./piece";

export class Pawn extends Piece {

  constructor(color: string) {
    super(color, 'Pion');
    this.image = 'assets/chess/pion-blanc.png';
    if (this.color.includes('noir')) {
      this.image = 'assets/chess/pion-noir.png';
    }
  }

  move(): void {
    console.log('Move du pion');
  }

}
