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
  localService: LocalService;
  constructor(private ls: LocalService){
    this.localService = ls;
  }

  ngOnInit(): void {
    console.log(this.item);
    console.log(this.localService.getArrayData(this.item.name));
    if (this.localService.getArrayData(this.item.name).length !== 0) {
      this.updateStatus();
    }
  }

  updateStatus(){
    if (this.localService.getArrayData(this.item.name).isMyList == true) {
      this.item.isMyList = true;
    }
    if (this.localService.getArrayData(this.item.name).isCompleted == true) {
      this.item.isCompleted = true;
    }
  }

  addToMyList(){
    this.item.isMyList = true;
    this.localService.saveObjectData(this.item.name, this.item);
  }
  MarkCompleted(){
    this.item.isCompleted = true;
    this.localService.saveObjectData(this.item.name, this.item);
  }
  removeFromMyList(){
    this.localService.removeData(this.item.name);
    this.item.isMyList = false;
  }
  unMarkCompleted(){
    this.item.isCompleted = false;
    this.localService.saveObjectData(this.item.name, this.item);
  }
  
  ngOnChanges(changes: SimpleChanges): void {
      if(changes['item']){
        this.updateStatus();
      }
  }
}
