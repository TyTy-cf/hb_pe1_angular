import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PokeApiMainJson} from "../models/pokemon/poke-api-main-json";
import {PokeApiPokemon} from "../models/pokemon/poke-api-pokemon";

@Injectable({
  providedIn: 'root'
})
export class HttpPokeApiService {

  defaultUrl: string = 'https://pokeapi.co/api/v2/pokemon?offset=';
  offsetLimit: string = '&limit=20';
  detailedPokemon: string = 'https://pokeapi.co/api/v2/pokemon/';
  arrayPokemon: Array<PokeApiPokemon> = new Array<PokeApiPokemon>();
  maxCount: number = 0;

  constructor(private httpClient: HttpClient) { }

  getAllPokemonByLimit(offset: number = 0): void {
    this.httpClient.get<PokeApiMainJson>(this.defaultUrl + offset + this.offsetLimit).subscribe((pokeApiJson) => {
      this.maxCount = pokeApiJson.count;
      for (const element of pokeApiJson.results) {
        this.httpClient.get<PokeApiPokemon>(element.url).subscribe((pokeApiPkmn) => {
          this.arrayPokemon.push(pokeApiPkmn);
          this.arrayPokemon.sort((a, b) =>
            a.id - b.id
          )
        })
      }
    });
  }

  getPokemon(number: number): Observable<PokeApiPokemon> {
    return this.httpClient.get<PokeApiPokemon>(this.detailedPokemon + number);
  }

}
