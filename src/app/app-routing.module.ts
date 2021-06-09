import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './components/cars/cars.component';
import { CarsFormComponent } from './forms/cars-form/cars-form.component';
import { SparesComponent } from './components/spares/spares.component';
import { SparesFormComponent } from './forms/spares-form/spares-form.component'

const routes: Routes = [
  {
    path: "cars-list",
    component: CarsComponent
  },
  {
    path: "cars-form",
    component: CarsFormComponent
  },
  {
    path: "spares-list",
    component: SparesComponent
  },
  {
    path: "spares-form",
    component: SparesFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
