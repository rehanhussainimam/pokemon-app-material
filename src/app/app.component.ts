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
  offsetdata: number;

  ngOnInit() {
    this.numberofdatatolist = 5;
    this.loadPage(this.numberofdatatolist, 1, 0);
  }

  loadPage = (numberofdatatolist, currentpageindex, offsetdata) => {
    this.numberofdatatolist = numberofdatatolist;
    this.currentpageindex = currentpageindex;
    this.offsetdata = offsetdata;
    this.DataService.getalldata(
      this.numberofdatatolist,
      this.offsetdata
    ).subscribe((finalres) => {
      this.pokemondata = finalres;
      this.filterarguments = Object.keys(this.pokemondata[0]);
      console.log(this.filterarguments);
    });
  };

  previouspage() {
    this.loadPage(
      this.numberofdatatolist,
      this.currentpageindex - 1,
      this.offsetdata - this.numberofdatatolist
    );
  }

  nextpage() {
    this.loadPage(
      this.numberofdatatolist,
      this.currentpageindex + 1,
      this.offsetdata + this.numberofdatatolist
    );
  }

  mySelectionChange = (value) => {
    this.currentpageindex = 0;
    this.offsetdata = 0;
    this.loadPage(
      this.numberofdatatolist,
      this.currentpageindex + 1,
      this.offsetdata
    );
  };

  search() {}

  constructor(private DataService: DataService) {}
}
