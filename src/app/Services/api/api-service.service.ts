import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  itemApi:string = "https://api.warframestat.us/items/";
  constructor(private http: HttpClient) {
    // This service can now make HTTP requests via `this.http`.
  }
}
