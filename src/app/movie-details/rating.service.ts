import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private HttpClient:HttpClient) { }

  setRating(rate:number,Movie:string)
  {
    console.log("-------------");
    console.log(typeof(rate));
    return this.HttpClient.post('http://localhost:3000/api/rate/'+Movie,{rate:rate});
  }

  getRating(Movie:string)
  {

    return this.HttpClient.get('http://localhost:3000/api/rate/'+Movie);
  }

  getUserRating(Movie:string)
  {

    return this.HttpClient.get('http://localhost:3000/api/getUserRate/'+Movie);
  }
}
