import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './pages/header/header.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Home';
  constructor() {
		
	}
	
}
