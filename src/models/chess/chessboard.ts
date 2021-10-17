import {Case} from "./case";
import {Piece} from "./piece";
import {Rook} from "./rook";
import {Knight} from "./knight";
import {Bishop} from "./bishop";
import {Queen} from "./queen";
import {King} from "./king";
import {Pawn} from "./pawn";

export class Chessboard {

  private _damier: Array<Case> = [];

  constructor() {
    let color: string = 'blanc';
    for(let y = 1; y <= 8; y++) {
      for(let x = 1; x <= 8; x++) {
        let piece: Piece | undefined = undefined;
        // PAr défaut je dis que la couleur est noire
        let colorPiece = 'noir';
        if (y === 7 || y == 8) {
          // alors, je dis que la couleur sera blanche
          colorPiece = 'blanc';
        }
        // x vaut 1 ou 8 (axe x des tours)
        // y vaut 1 ou 8 (axe y des tours)
        // alors on rentre dans le if
        if (y === 1 || y === 8) {
          if (x === 1 || x === 8) {
            piece = new Rook(colorPiece);
          } else if (x === 2 || x === 7) {
            piece = new Knight(colorPiece);
          } else if (x === 3 || x === 6) {
            piece = new Bishop(colorPiece);
          } else if (x === 4) {
            piece = new Queen(colorPiece);
          } else if (x === 5) {
            piece = new King(colorPiece);
          }
        } else if (y === 2 || y === 7) {
          piece = new Pawn(colorPiece);
        }
        this._damier.push(new Case(color, x, y, piece));
        if (x !== 8) {
          if (color === 'blanc') {
            color = 'noir';
          } else {
            color = 'blanc';
          }
        }
      }
    }
  }

  get damier(): Array<Case> {
    return this._damier;
  }
}
