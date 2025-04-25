import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
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
