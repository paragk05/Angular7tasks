import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlService } from '../../../url.service'
import { User } from './domain'

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(
    private http : HttpClient, 
    private url : UrlService
  ) { }

  login(user : Object) {
    return this.http.post(`${this.url.base()}/login`,user)
  }
}
