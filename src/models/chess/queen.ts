import {Piece} from "./piece";

export class Queen extends Piece {

  constructor(color: string) {
    super(color, 'Reine')
    this.image = 'assets/chess/reine-blanc.png';
    if (this.color.includes('noir')) {
      this.image = 'assets/chess/reine-noir.png';
    }
  }

  move(): void {
    console.log('Move de la reine');
  }

}
