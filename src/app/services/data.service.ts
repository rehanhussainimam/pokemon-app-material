import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private HttpClient: HttpClient) {}

  private url: string = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';

  getalldata = () => {
    return this.HttpClient.get(this.url);
  };

  getsingleurldata = (url: string) => {
    const testurl = 'https://pokeapi.co/api/v2/pokemon/2/';
    return this.HttpClient.get(testurl);
  };
}
