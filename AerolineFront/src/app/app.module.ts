import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ListarAvionesComponent } from './avion/listarAviones.component';
import { InsertarAvionComponent } from './avion/insertarAvion.component';
import { InsertarPasajeroComponent } from './pasajero/insertarPasajero.component';

import { MatDatepickerModule} from '@angular/material/datepicker';
import { LoginService } from './login/login.service';
import { MatTabsModule } from '@angular/material/tabs';

import { ReactiveFormsModule } from '@angular/forms';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 

//Animations
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.component';''
import {RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md'

//Http
import { HttpModule } from '@angular/http'; 
import { MatNativeDateModule } from '@angular/material';
import { Usuario } from './login/usuario';
import { AvionService } from './avion/avion.service';
import { PasajeroService } from './pasajero/pasajero.service';
import { TotalVentasComponent } from './pasajero/totalVentas.component';
import { AndyComponent } from './avion/andy.component';
import { DestinosComponent } from './vuelos/destinos.component';
import { VuelosSalidasComponent } from './vuelos/vuelossalida.component';
import { DestinoService } from './vuelos/destino.service';


@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent,
    LoginComponent,
    ListarAvionesComponent,
    TotalVentasComponent,
    InsertarAvionComponent,
    InsertarPasajeroComponent
    AndyComponent,
    DestinosComponent,
    VuelosSalidasComponent
  ], 
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgbModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    MatTabsModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'appComponent', component: AppComponent},
      {path: 'home', component: HomeComponent},
      {path: 'login', component: LoginComponent},
      {path: 'listarAviones', component: ListarAvionesComponent},
      {path: 'totalVentas', component: TotalVentasComponent},
      {path: 'insertarAvion', component: InsertarAvionComponent},
      {path: 'insertarPasajero', component: InsertarPasajeroComponent}
       {path: 'destinos', component: DestinosComponent},
        {path: 'salidaVuelo', component: VuelosSalidasComponent}
    ])
  ],
  schemas: [NO_ERRORS_SCHEMA],
  
  providers: [
    LoginService,
    Usuario,
    AvionService,
    PasajeroService,
    DestinoService
  ],
  bootstrap: [AppComponent] 
})
export class AppModule { }
