import {Piece} from "./piece";

export class Bishop extends Piece {

  constructor(color: string) {
    super(color, 'Fou');
    this.image = 'assets/chess/fou-blanc.png';
    if (this.color.includes('noir')) {
      this.image = 'assets/chess/fou-noir.png';
    }
  }

  move(): void {
    console.log('Move du Fou');
  }

}
