import {Piece} from "./piece";

export class Rook extends Piece{

  constructor(color: string) {
    super(color, 'Tour');
    this.image = 'assets/chess/tour-blanc.png';
    if (this.color.includes('noir')) {
      this.image = 'assets/chess/tour-noir.png';
    }
  }

  move(): void {
    console.log('Move de la tour');
  }

}
