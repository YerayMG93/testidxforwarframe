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
  title = 'puto';
  resourcesNeeded = {};
  apiService: ApiServiceService;
  constructor(localService: LocalService, apiService: ApiServiceService) {
    this.apiService = apiService;
  }
  ngOnInit() {
    this.resourcesNeeded = this.apiService.itemApi;
  }
  
}
