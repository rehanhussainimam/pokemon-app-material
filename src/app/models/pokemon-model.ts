import { ability } from './ability-model';

export interface PokemonModel {
  name: string;
  height: string;
  weight: string;
  abilities: ability[];
  imageurl: string;
}
