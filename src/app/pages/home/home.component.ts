import { Component, OnInit } from '@angular/core';
import { LocalService } from '../../Services/local/local.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit{
  title = 'test';
  resourcesNeeded:Map<string, number> = new Map();
  ls: LocalService;
  constructor(localStorage: LocalService) {
    this.ls = localStorage;
  }
  ngOnInit() {
    let items = this.ls.getArrayData('list');
    for (let index = 0; index < items.length; index++) {
      this.sumRessources(items[index]);
    }
  }
    sumRessources(itemSearch:string){
      let tempItem = this.ls.getObjectData(itemSearch);
      if(!tempItem.isCompleted){
        let ressources = tempItem.components;
        for (let item of ressources){
          console.log(item);
          if (this.resourcesNeeded.has(item.name)){
            this.resourcesNeeded.set(item.name, this.resourcesNeeded.get(item.name)! + item.itemCount);
          } else {
            this.resourcesNeeded.set(item.name, item.itemCount);
          }
        }
      }
    }
  
}
