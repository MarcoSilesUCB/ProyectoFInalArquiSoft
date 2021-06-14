import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { VehiclesFormComponent } from './forms/vehicles-form/vehicles-form.component';
import { SparesComponent } from './components/spares/spares.component';
import { SparesFormComponent } from './forms/spares-form/spares-form.component';
import { DetailVehicleComponent } from './components/detail-vehicle/detail-vehicle.component';
import { DetailSpareComponent } from './components/detail-spare/detail-spare.component';
import { LoginComponent } from './components/login/login.component';
import { SalesFormComponent } from './forms/sales-form/sales-form.component';
import { SalesComponent } from './components/sales/sales.component';
import { SaleComponent } from './components/sale/sale.component';
const routes: Routes = [
  {
    path: "vehicles-list",
    component: VehiclesComponent
  },
  {
    path: "vehicles-form",
    component: VehiclesFormComponent
  },
  {
    path: "spares-list",
    component: SparesComponent
  },
  {
    path: "spares-form",
    component: SparesFormComponent
  },
  {
    path: "vehicles-detail/:id",
    component: DetailVehicleComponent
  },
  {
    path: "spare-detail/:id",
    component: DetailSpareComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "sales-form",
    component: SalesFormComponent
  },
  {
    path: "sales",
    component: SalesComponent
  },
  {
    path: "sale/:id",
    component: SaleComponent
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
