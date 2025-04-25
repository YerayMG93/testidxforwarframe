import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ItemCardComponent } from '../item-card/item-card.component';
import { LocalService } from '../../Services/local/local.service';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-list',
  standalone: true,
  imports: [MatCardModule, ItemCardComponent, FormsModule],
  templateUrl: './my-list.component.html',
  styleUrl: './my-list.component.css'
})
export class MyListComponent {
  itemList: any[] = [];
  fname: any;

  constructor(private localStorage: LocalService) {
    this.loadItems();
  } 

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
}
