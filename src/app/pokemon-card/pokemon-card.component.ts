import { Component, Input } from '@angular/core';

export interface PokemonModel {
  name: string;
  height: number;
  weight: number;
  abilities: ability[];
}

export interface ability {
  abilityname: string;
}

@Component({
  selector: 'pokemon-card',
  templateUrl: 'pokemon-card.component.html',
  styleUrls: ['pokemon-card.component.css'],
})
export class PokemonCardComponent {
  @Input() pokemondata: PokemonModel;
}
