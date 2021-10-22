import {PokeApiType} from "./poke-api-type";

export interface PokeApiPokemon {
  name: string;
  order: number;
  id: number;
  types: PokeApiType[];
  sprites: {
    other: {
      'official-artwork': {
        'front_default': string;
      }
    }
  }
}
