import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ItemCardComponent } from '../item-card/item-card.component';
import { LocalService } from '../../Services/local/local.service';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-completed-list',
  standalone: true,
  imports: [MatCardModule, ItemCardComponent, FormsModule, RouterModule],
  templateUrl: './completed-list.component.html',
  styleUrl: './completed-list.component.css'
})
export class CompletedListComponent {
  itemList: any[] = [];
  fname: any;
  router: Router;
  title = 'Completed List';

  constructor(private localStorage: LocalService, router: Router) {
    this.loadItems();
    this.router = router;
  } 

  loadItems(data?:string) {
    this.itemList = [];
    let tempItem:any;
    let list = this.localStorage.getArrayData('list');
    if(data){
      for (let i = 0; i < list.length; i++) { 
        tempItem = this.localStorage.getObjectData(list[i]);
        if (tempItem.isCompleted && tempItem.name.toLowerCase().includes(data.toLowerCase())) 
          this.itemList.push(tempItem);
      }
    }
    else{
      for (let i = 0; i < list.length; i++) { 
        if (this.localStorage.getObjectData(list[i]).isCompleted) 
          this.itemList.push(this.localStorage.getObjectData(list[i]));
      }
    }
  }
  goToList(){
    this.router.navigate(['/list']);
  }
  ngOnInit(): void{
    document.addEventListener('click', (event) => {
      if((event.target as HTMLElement).nodeName == "BUTTON") this.loadItems(this.fname);
    });
  }
}
