import {Piece} from "./piece";

export class Knight extends Piece {

  constructor(color: string) {
    super(color, 'Cavalier');
    this.image = 'assets/chess/cavalier-blanc.png';
    if (this.color.includes('noir')) {
      this.image = 'assets/chess/cavalier-noir.png';
    }
  }

  move(): void {
    console.log('Move du Cavalier');
  }

}
