import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CarsComponent } from './components/cars/cars.component';
import { CarsFormComponent } from './forms/cars-form/cars-form.component';
import { SparesComponent } from './components/spares/spares.component';
import { SparesFormComponent } from './forms/spares-form/spares-form.component';
import { DetailVehicleComponent } from './components/detail-vehicle/detail-vehicle.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarsFormComponent,
    SparesComponent,
    SparesFormComponent,
    DetailVehicleComponent,
    LoginComponent
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
