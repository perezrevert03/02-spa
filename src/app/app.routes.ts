import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { FutbolistasComponent } from './components/futbolistas/futbolistas.component';
import { DestacadoComponent } from './components/destacado/destacado.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'futbolistas', component: FutbolistasComponent },
    { path: 'destacado/:id', component: DestacadoComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
