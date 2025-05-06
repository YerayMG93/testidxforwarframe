import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ItemCardComponent } from '../item-card/item-card.component';
import { LocalService } from '../../Services/local/local.service';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-my-list',
  standalone: true,
  imports: [MatCardModule, ItemCardComponent, FormsModule, RouterModule],
  templateUrl: './my-list.component.html',
  styleUrl: './my-list.component.css'
})
export class MyListComponent implements OnInit{
  itemList: any[] = [];
  fname: any;
  router: Router;

  constructor(private localStorage: LocalService, router: Router) {
    this.loadItems();
    this.router = router;
  } 

  //Retrieve the items on the local storage that are not completed.
  loadItems(data?:string) {
    this.itemList = [];
    let tempItem:any;
    let list = this.localStorage.getArrayData('list');
    if(data){
      for (let i = 0; i < list.length; i++) { 
        tempItem = this.localStorage.getObjectData(list[i]);
        if (!tempItem.isCompleted && tempItem.name.toLowerCase().includes(data.toLowerCase()))
          this.itemList.push(tempItem);
      }
    }
    else{
      for (let i = 0; i < list.length; i++) { 
        if (!this.localStorage.getObjectData(list[i]).isCompleted)
          this.itemList.push(this.localStorage.getObjectData(list[i]));
      }
    }
  }

  //empty list button function to move to Search page
  goToList(){
    this.router.navigate(['/list']);
  }

  //check whenever i click on buttons to refresh the listed items
  ngOnInit(): void{
    const searchbar = document.getElementById("fname");
    document.addEventListener('click', (event) => {
      if((event.target as HTMLElement).nodeName == "BUTTON") this.loadItems(this.fname);
    });
  }
}
