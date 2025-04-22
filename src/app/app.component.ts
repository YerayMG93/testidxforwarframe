import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './pages/header/header.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterModule],
  template: `
	<main>
		<app-header id=header></app-header>
		<router-outlet></router-outlet>
		<app-header id=footer></app-header>
	</main>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Home';
  constructor() {
		
	}
	
}
