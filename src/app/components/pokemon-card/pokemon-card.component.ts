import { Component, Input } from '@angular/core';
import { PokemonModel } from '../../models/pokemon-model';

@Component({
  selector: 'pokemon-card',
  templateUrl: 'pokemon-card.component.html',
  styleUrls: ['pokemon-card.component.css'],
})
export class PokemonCardComponent {
  @Input() pokemondata: PokemonModel;
  @Input() fulldata: any;

  selectedfulldata: any;

  ngOnInit() {
    this.selectedfulldata = this.fulldata.filter(
      (res) => res.name == this.pokemondata.name
    )[0];
  }
}
