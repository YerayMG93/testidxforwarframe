import { Component, OnInit } from '@angular/core';
import { LocalService } from '../../Services/local/local.service';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit{
  resourcesNeeded:Map<string, number> = new Map();
  ls: LocalService;
  router: Router;

  constructor(localStorage: LocalService, router: Router) {
    this.ls = localStorage;
    this.router = router;
  }

  ngOnInit() {
    let items = this.ls.getArrayData('list');
    for (let index = 0; index < items.length; index++) {
      this.sumRessources(items[index]);
    }
  }

  //Function for empty list button.
  goToList(){
    this.router.navigate(['/list']);
  }

  //Reads all items from local storage and sums the ressources needed to craft them.
  sumRessources(itemSearch:string){
    let tempItem = this.ls.getObjectData(itemSearch);
    let tempRes:any;
    if(!tempItem.isCompleted){
      console.log(tempItem);
      let ressources = tempItem.components;
      for (let item of ressources){
        if(item.name == "Blueprint" && !tempItem.isPrime) item.name = tempItem.name + " " + item.name;
        else if(tempItem.isPrime == true && !item.productCategory && item.drops != 0) {
          item.name = item.drops[item.drops.length - 1].location;
        }else if(tempItem.category == "Warframes" && !tempItem.isPrime && item.name != "Orokin Cell"){
          console.log(item);
          item.name = tempItem.name + " " + item.name;
        }
        if (this.resourcesNeeded.has(item.name)){
          this.resourcesNeeded.set(item.name, this.resourcesNeeded.get(item.name) + item.itemCount);
        } else {
          this.resourcesNeeded.set(item.name, item.itemCount);
        }
      }
    }
  }
}
