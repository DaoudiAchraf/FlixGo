import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  constructor(private HttpClient:HttpClient) { }


  AccountsNumber()
  {
    return this.HttpClient.get<number>('http://localhost:3000/api/getAccountsNumber');
  }

  ReservsPerfilm()
  {
    return this.HttpClient.get<number>('http://localhost:3000/api/getReservsPerFilm');
  }

  getMostRated()
  {
    return this.HttpClient.get('http://localhost:3000/api/getMostRated');
  }
}
