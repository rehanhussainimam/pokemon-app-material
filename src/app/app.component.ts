import { Component, OnInit } from '@angular/core';
import { PokemonModel } from './components/pokemon-card/pokemon-card.component';
import { DataService } from './services/data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  pokemondata: PokemonModel[];

  ngOnInit() {
    this.DataService.getalldata().subscribe(
      (finalres) => (this.pokemondata = finalres)
    );
  }

  constructor(
    private DataService: DataService,
    private HttpClient: HttpClient
  ) {
    // this.pokemondata = [
    //   {
    //     name: 'Pikachu',
    //     height: '10 cm',
    //     weight: '10 kg',
    //     abilities: [
    //       {
    //         abilityname: 'Thunderbolt',
    //       },
    //       {
    //         abilityname: 'Fire Attack',
    //       },
    //     ],
    //   },
    // ];
  }
}
