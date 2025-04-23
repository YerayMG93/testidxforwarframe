import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [MatCardModule,CommonModule],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.css'
})

export class ItemCardComponent {
  @Input() item: any;
  isMyList = false;
  isCompleted = false;
  constructor(){}

  addToMyList(){
    this.isMyList = true;
  }
  MarkCompleted(){
    this.isCompleted = true;
  }
  removeFromMyList(){
    this.isMyList = false;
  }
  unMarkCompleted(){
    this.isCompleted = false;
  }
}
