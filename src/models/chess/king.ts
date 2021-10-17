import {Piece} from "./piece";

export class King extends Piece {

  constructor(color: string) {
    super(color, 'Roi');
    this.image = 'assets/chess/roi-blanc.png';
    if (this.color.includes('noir')) {
      this.image = 'assets/chess/roi-noir.png';
    }
  }

  move(): void {
    console.log('Move du Roi');
  }

}
