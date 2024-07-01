import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { ItemComponent } from './pages/item/item.component';
import { MyListComponent } from './pages/my-list/my-list.component';
import { CompletedListComponent } from './pages/completed-list/completed-list.component';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent,
        title: 'Home'
    },
    {
        path:'list',
        component: ListComponent,
        title: 'Search'
    },
    {
        path:'list/:id',
        component: ItemComponent,
        title: 'Item'
    },
    {
        path:'mylist',
        component: MyListComponent,
        title: 'MyList'
    },
    {
        path:'completedlist',
        component: CompletedListComponent,
        title: 'Completed'
    }
];
