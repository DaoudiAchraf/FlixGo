import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private HttpClient:HttpClient) { }

  isAuth4booking()
  {
    return this.HttpClient.get('http://localhost:3000/auth/booking');
  }
}
