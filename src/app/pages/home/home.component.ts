import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../Services/api/api-service.service';
import { LocalService } from '../../Services/local/local.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  title = 'test';
  resourcesNeeded:any = [];
  constructor() {
  }
  ngOnInit() {
    //this.resourcesNeeded = this.apiService.searchItems(this.localService.getArrayData("list"));
  }
  
}
