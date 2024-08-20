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
  test = ""
  list:any[] = [];
  error = "";
  myList:any[] = [];
  constructor(private localService: LocalService) {
    this.myList = localService.getArrayData('mylist');
    
  }
    search() {
      const fname = document.getElementById('fname') as HTMLInputElement;
      const searchTerm = fname.value;
      console.log(searchTerm);
      this.test = searchTerm;
      }
  
  ngOnInit() {
    this.myList = this.localService.getArrayData('mylist');
  }
}