import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { PokemonModel } from './components/pokemon-card/pokemon-card.component';
import { DataService } from './services/data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  testdata: PokemonModel[];

  ngOnInit() {
    this.DataService.getalldata().pipe(map(firstres) => {
      let finalres = [];
      return firstres;
    }).subscribe((res) => console.log(res));
    this.DataService.getsingleurldata().subscribe((res) => console.log(res));
  }

  constructor(private DataService: DataService) {
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
