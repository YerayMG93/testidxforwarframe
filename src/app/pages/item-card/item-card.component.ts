import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { LocalService } from '../../Services/local/local.service';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [MatCardModule,CommonModule],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.css'
})

export class ItemCardComponent implements OnChanges{
  @Input() item: any;
  localService: LocalService;
  constructor(private ls: LocalService){
    this.localService = ls;
  }


  updateStatus(){
    if (this.localService.getArrayData(this.item.name).isMyList == true) {
      this.item.isMyList = true;
    }
    if (this.localService.getArrayData(this.item.name).isCompleted == true) {
      this.item.isCompleted = true;
    }
  }

  //Adds item to local storage and sets it to my list.
  addToMyList(){
    let list = this.localService.getArrayData('list');
    if(list.length == 0){
      list = [];
    }
    list.push(this.item.name);
    this.localService.saveArrayData('list', list);
    this.item.isMyList = true;
    this.localService.saveObjectData(this.item.name, this.item);
  }

  //Marks item as completed.
  MarkCompleted(){
    this.item.isCompleted = true;
    this.localService.saveObjectData(this.item.name, this.item);
  }

  //Removes item from list and local storage
  removeFromMyList(){
    let list = this.localService.getObjectData('list');
    list.splice(list.indexOf(this.item.name), 1);
    this.localService.saveArrayData('list', list);
    this.localService.removeData(this.item.name);
    this.item.isMyList = false;
  }

  //Removes item from completed.
  unMarkCompleted(){
    this.item.isCompleted = false;
    this.localService.saveObjectData(this.item.name, this.item);
  }
  
  //Check the changes on the item and updates the card view.
  ngOnChanges(changes: SimpleChanges): void {
      if(changes['item']){
        this.updateStatus();
      }
  }
}
