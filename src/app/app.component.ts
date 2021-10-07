import { Component } from '@angular/core';
import { PokemonModel } from './pokemon-card/pokemon-card.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  testdata: PokemonModel[];

  constructor() {
    this.testdata = [
      {
        name: 'Pikachu',
        height: '10 cm',
        weight: '10 kg',
        abilities: [
          {
            abilityname: 'Thunderbolt',
          },
          {
            abilityname: 'Fire Attack',
          },
        ],
      },
    ];
  }
}
