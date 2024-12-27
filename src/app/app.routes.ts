import { Routes } from '@angular/router';
import { LoginComponent } from '../app/page/login/login.component';
import { BrowseComponent } from '../app/page/browse/browse.component';

export const routes: Routes = [

    {path : '' , component:LoginComponent},
    {path : 'browse' , component:BrowseComponent}
];
