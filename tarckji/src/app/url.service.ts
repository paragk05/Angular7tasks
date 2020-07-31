import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  private readonly baseUrl='http://127.0.0.1:3003'
  constructor() { }

  base() {
    return this.baseUrl;
  }
}
