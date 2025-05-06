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

  //Checks the resources needed at the start of the app.
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
    if(!tempItem.isCompleted){
      console.log(tempItem);
      let ressources = tempItem.components;
      for (let item of ressources){
        //Filter the resource name to show on resource map.
        if (tempItem.isPrime == true && !item.productCategory && item.drops != 0)item.name = item.drops[item.drops.length - 1].location;
        else if (item.name == "Blueprint")item.name = tempItem.name + " " + item.name;
        else if(tempItem.category == "Warframes" && item.name != "Orokin Cell"){
          item.name = tempItem.name + " " + item.name;
        }
        //Adds to the resource map
        if (this.resourcesNeeded.has(item.name)){
          this.resourcesNeeded.set(item.name, this.resourcesNeeded.get(item.name) + item.itemCount);
        } else {
          this.resourcesNeeded.set(item.name, item.itemCount);
        }
      }
    }
  }
}
