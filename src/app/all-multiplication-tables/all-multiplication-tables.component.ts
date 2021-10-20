import { Component } from '@angular/core';

@Component({
  selector: 'app-all-multiplication-tables',
  templateUrl: './all-multiplication-tables.component.html',
  styleUrls: ['./all-multiplication-tables.component.scss']
})
export class AllMultiplicationTablesComponent {

  arrayMultiplicationTable: Array<number> = [];

  constructor() {
    for (let i = 1; i <= 20; i++) {
      this.arrayMultiplicationTable.push(i);
    }
  }

}
