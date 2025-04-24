import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() { }
  
  public saveObjectData(key: string, value: object) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  public getObjectData(key: string) {
    return JSON.parse(localStorage.getItem(key) || '{}');
  }

  public saveData(key: string, value: string) {
    localStorage.setItem(key, value);
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
