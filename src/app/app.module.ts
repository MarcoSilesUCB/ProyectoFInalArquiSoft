import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SparesComponent } from './components/spares/spares.component';
import { SparesFormComponent } from './forms/spares-form/spares-form.component';
import { DetailVehicleComponent } from './components/detail-vehicle/detail-vehicle.component';
import { LoginComponent } from './components/login/login.component';
import { DetailSpareComponent } from './components/detail-spare/detail-spare.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { VehiclesFormComponent } from './forms/vehicles-form/vehicles-form.component';


@NgModule({
  declarations: [
    AppComponent,
    SparesComponent,
    SparesFormComponent,
    DetailVehicleComponent,
    LoginComponent,
    DetailSpareComponent,
    VehiclesComponent,
    VehiclesFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
