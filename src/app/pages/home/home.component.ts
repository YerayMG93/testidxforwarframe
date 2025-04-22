import { Component } from '@angular/core';
import { ApiServiceService } from '../../Services/api/api-service.service';
import { LocalService } from '../../Services/local/local.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'test';
  resourcesNeeded:any;
  constructor() {
  }
  ngOnInit() {
    //this.resourcesNeeded = this.apiService.searchItems(this.localService.getArrayData("list"));
  }
  
}
