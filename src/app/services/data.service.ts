import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { forkJoin } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { PokemonModel } from '../models/pokemon-model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private HttpClient: HttpClient) {}

  private url: string = 'https://pokeapi.co/api/v2/pokemon?';

  getalldata = (limit: number, offset: number) => {
    return this.HttpClient.get(
      `${this.url}limit=${limit}&offset=${offset}`
    ).pipe(
      mergeMap((mergemapres: any[]) => {
        let mymergemaparray: any[] = [];
        mymergemaparray = mergemapres['results'].map((single: any) => {
          return this.HttpClient.get(single['url']);
        });
        return forkJoin(mymergemaparray);
      }),
      map((res) => {
        console.log('mapres', res);
        return {
          singleresdata: res.map((singleres: any) => {
            let singleresdata: PokemonModel = {
              name: singleres['name'],
              weight: singleres['weight'],
              height: singleres['height'],
              abilities: singleres.abilities,
              imageurl: singleres['sprites']['front_default'],
            };
            return singleresdata;
          }),
          fullresdata: res,
        };
      })
    );
  };

  getsingleurldata = (url: string) => {
    const testurl = 'https://pokeapi.co/api/v2/pokemon/2/';
    return this.HttpClient.get(testurl);
  };
}
