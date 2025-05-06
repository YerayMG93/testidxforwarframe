import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
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
  error = "";
  myList:any[] = [];
  fname = "";
  api: ApiServiceService;

  constructor(private apiService: ApiServiceService) {
    this.api = apiService;
  }
    //Search for items in the API.
    search() {
      //if searchbar is empty do nothing.
      if(this.fname !== ""){
        const loading = document.getElementById('loading');
        this.list = [];
        //loading animation start
        loading?.classList.add("custom-loader");
        loading?.classList.remove("hidden");

        //get items from API
        this.api.searchItem(this.fname).subscribe((data:any) => {
          console.log(data);
          this.list = data.filter((item:any) =>
            item.components && item.components.length > 0
          );
          //show error if empty list
          if (this.list.length == 0) {
            this.error = "No items found";
          } else {
            this.error = "";
          }
          //loading animation end
          loading?.classList.remove("custom-loader");
          loading?.classList.add("hidden");
        });
      }
    }
}