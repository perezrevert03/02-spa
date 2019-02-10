import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios
import { DestacadosService } from './servicios/destacados.services';

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { FutbolistasComponent } from './components/futbolistas/futbolistas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    FutbolistasComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [DestacadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
