import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
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

export class ItemCardComponent implements OnInit, OnChanges{
  @Input() item: any;
  isMyList = false;
  isCompleted = false;
  localService: LocalService;
  constructor(private ls: LocalService){
    this.localService = ls;
    // Do not use this.item in the constructor.
  }

  ngOnInit(): void {
    console.log(this.item); // This is where you should log the item

    if (this.localService.getArrayData('mylist').length !== 0) {
      if (this.localService.getArrayData('mylist').includes(this.item.name)) {
        this.isMyList = true;
      }
    }
    if (this.localService.getArrayData('completed').length !== 0) {
      if (this.localService.getArrayData('completed').includes(this.item.name)) {
        this.isCompleted = true;
      }
    }
  }

  addToMyList(){
    let myList = this.localService.getArrayData('mylist');
    myList.push(this.item.name);
    this.localService.saveArrayData('mylist', myList);
    this.isMyList = true;
  }
  MarkCompleted(){
    let completed = this.localService.getArrayData('completed');
    completed.push(this.item.name);
    this.localService.saveArrayData('completed', completed);
    this.isCompleted = true;
  }
  removeFromMyList(){
    let myList = this.localService.getArrayData('mylist');
    myList.splice(myList.indexOf(this.item.name), 1);
    this.localService.saveArrayData('mylist', myList);
    this.isMyList = false;
  }
  unMarkCompleted(){
    let completed = this.localService.getArrayData('completed');
    completed.splice(completed.indexOf(this.item.name), 1);
    this.localService.saveArrayData('completed', completed);
    this.isCompleted = false;
  }
  
  ngOnChanges(changes: SimpleChanges): void {
      if(changes['item']){
        console.log("item changed")
      }
  }
}
