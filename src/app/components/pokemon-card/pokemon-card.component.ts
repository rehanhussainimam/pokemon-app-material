import { Component, Input } from '@angular/core';

export interface PokemonModel {
  name: string;
  height: string;
  weight: string;
  abilities: ability[];
  imageurl: string;
}

export interface ability {
  ability: {
    name: string;
  };
}

@Component({
  selector: 'pokemon-card',
  templateUrl: 'pokemon-card.component.html',
  styleUrls: ['pokemon-card.component.css'],
})
export class PokemonCardComponent {
  @Input() pokemondata: PokemonModel;
}
