import { Component, OnInit } from '@angular/core';
import { PokemonModel } from './models/pokemon-model';
import { DataService } from './services/data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  pokemondata: PokemonModel[];
  numberofdatatolist: number;
  numberofpages: number;
  currentpageindex: number;
  filterarguments: string[];

  ngOnInit() {
    this.numberofdatatolist = 10;
    this.DataService.getalldata(this.numberofdatatolist).subscribe(
      (finalres) => {
        this.pokemondata = finalres;
        this.filterarguments = Object.keys(this.pokemondata[0]);
        console.log(this.filterarguments);
      }
    );
  }

  constructor(private DataService: DataService) {}
}
