import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Item {
  name: string;
  type: string;
  description: string;
  rarity: string;
  icon: string;
  buildQuantity: number;
  components: Array<any>;
}
let urlResourceNames:string = "https://api.warframestat.us/items/search/Resource/?by=type&only=name&language=en";
let urlitems:string = "https://api.warframestat.us/items/search/";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  itemApi:string = "https://api.warframestat.us/items/";
  constructor(private http: HttpClient) {
    // This service can now make HTTP requests via `this.http`.
    // https://api.warframestat.us/items/search/Resource/?by=type&only=name&language=en
}

public searchItems(searchTerm: Array<string>) {
  let newSearch = urlResourceNames;
  let result: any[] = [];
  for (let i = 0; i < searchTerm.length; i++) {
    result.push(this.searchItem(searchTerm[i]));
  }
  return result;
}

public searchItem(searchTerm: string) {
  let newSearch = urlitems;
  newSearch+= searchTerm;
  newSearch+= "/?language=en";
  return this.http.get(newSearch);
}


public saveArrayData(key: string, value: string[]) {
  localStorage.setItem(key, JSON.stringify(value));
}

public getArrayData(key: string) {
  return JSON.parse(localStorage.getItem(key) || '[]');
}

public getData(key: string) {
  return localStorage.getItem(key)
}
public removeData(key: string) {
  localStorage.removeItem(key);
}

public clearData() {
  localStorage.clear();
}
}