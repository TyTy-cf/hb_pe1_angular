import { Component, OnInit } from '@angular/core';
import {HttpPokeApiService} from "../../service/http-poke-api.service";
import {PokeApiMainJson} from "../../models/pokemon/poke-api-main-json";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  limit: number = 0;
  maxLimit: number = 0;

  constructor(public httpPokeApiService: HttpPokeApiService) { }

  ngOnInit(): void {
    this.httpPokeApiService.getAllPokemonByLimit(this.limit);
  }

  nextPokemons(): void {
    this.limit += 20;
    if (this.limit > this.maxLimit) {
      this.maxLimit = this.limit;
      this.httpPokeApiService.getAllPokemonByLimit(this.limit);
    }
  }

  previousPokemons(): void {
    this.limit -= 20;
  }
}
