import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpPokeApiService} from "../../service/http-poke-api.service";
import {PokeApiPokemon} from "../../models/pokemon/poke-api-pokemon";

@Component({
  selector: 'app-pokemon-detailed',
  templateUrl: './pokemon-detailed.component.html',
  styleUrls: ['./pokemon-detailed.component.scss']
})
export class PokemonDetailedComponent implements OnInit {

  pokemon!: PokeApiPokemon;

  constructor(private activatedRoute: ActivatedRoute, private httpPokeApi: HttpPokeApiService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      this.httpPokeApi.getPokemon(param.idApi).subscribe((pkmn) => {
        this.pokemon = pkmn;
      })
    });
  }

}
