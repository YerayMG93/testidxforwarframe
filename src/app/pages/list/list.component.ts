import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { LocalService } from '../../Services/local/local.service';
import { FormsModule } from '@angular/forms';
import { ApiServiceService } from '../../Services/api/api-service.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatCardModule, FormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  title = 'Search list';
  list:any[] = [];
  error = "Start searching for what you want to craft";
  myList:any[] = [];
  fname = "";
  constructor(private localService: LocalService) {
    this.myList = localService.getArrayData('mylist');
    
  }
    search() {
      console.log(this.fname);
      this.list = this.myList.filter(item => item.name.includes(this.fname));
      console.log(this.list);
      if (this.list.length === 0) {
        this.error = "No items found";
      } else {
        this.error = "";
      }
      }
  
  ngOnInit() {
    this.myList = this.localService.getArrayData('mylist');
  }
}