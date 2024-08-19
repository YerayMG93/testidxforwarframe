import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { LocalService } from '../../Services/local/local.service';
import { ApiServiceService } from '../../Services/api/api-service.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  title = 'Search list';
  list:any[] = [];
  error = "";
  myList:any[] = [];
  constructor(private localService: LocalService, apiService: ApiServiceService) {
    this.myList = localService.getArrayData('mylist');
    apiService.searchItems("rubico").subscribe(data => {
      this.list = data;
    }).add(() => {
      console.log("done");
    });
  }
    search() {
      const fname = document.getElementById('fname') as HTMLInputElement;
      const searchTerm = fname.value;
      }
  
  ngOnInit() {
    this.myList = this.localService.getArrayData('mylist');
  }
}