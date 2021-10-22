import {PokeApiResult} from "./poke-api-result";

export interface PokeApiMainJson {
  count: number;
  next: string;
  previous: string;
  results: PokeApiResult[];
}
