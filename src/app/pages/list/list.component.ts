import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { LocalService } from '../../Services/local/local.service';
import { FormsModule } from '@angular/forms';
import { ApiServiceService } from '../../Services/api/api-service.service';
import { ItemCardComponent } from '../item-card/item-card.component';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatCardModule, FormsModule, ItemCardComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  title = 'Search list';
  list:any[] = [];
  error = "Start searching for what you want to craft";
  myList:any[] = [];
  fname = "";
  api: ApiServiceService;
  constructor(private localService: LocalService, apiService: ApiServiceService) {
    this.myList = localService.getArrayData('mylist');
    this.api = apiService;
    
  }
  
    search() {
      this.api.searchItem(this.fname).subscribe((data:any) => {
        this.list = data.filter((item:any) =>
          item.components && item.components.length > 0
        );
        if (this.list.length == 0) {
          this.error = "No items found";
        } else {
          this.error = "";
        }
      });
    }
  
  ngOnInit() {
    this.myList = this.localService.getArrayData('mylist');
  }
}