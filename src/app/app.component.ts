import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './pages/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, HeaderComponent, RouterModule],
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
/*
TODO:
HOME
	CREAR ARCHIVO GUARDADO LOCAL LISTA OBJETOS MYLIST
	RESUMEN RECURSOS NECESARIOS PARA FABRICAR OBJETOS DE MYLIST
ITEM
	DESCRIPCION
	RECURSOS PARA FABRICAR
	NOMBRE
	IMAGEN
	BOTON PARA AÑADIR A MYLIST
	BOTON PARA ELIMINAR DE MYLIST
LIST
	BARRA DE BUSQUEDA
  LISTA DE ITEMCARD
MYLIST
  ITEMCARD
		BOTON PARA AÑADIR A COMPLETEDLIST
COMPLETEDLIST
	ITEMCARD
		BOTON PARA ELIMINAR DE COMPLETEDLIST
ITEMCARD
	DISEÑO DE ITEMCARD
	BOTONES PARA AÑADIR O QUITAR DE MYLIST/COMPLETEDLIST
*/