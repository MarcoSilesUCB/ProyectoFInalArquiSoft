import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car.model'
import { Motorcycle } from '../../models/motorcycle.model'
import { Vehicle } from '../../models/vehicle.model'
import { CarService } from '../../services/car.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service'

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {

  constructor(
    public authenticationService: AuthenticationService,
    public router: Router,
    public carService: CarService,

  ) { }

  vehicles: Vehicle[] = [];
  isLoggedIn = false;
  isCar = false;
  isMotorcycle = false;


  async ngOnInit() {
    this.vehicles = await this.carService.getVehicles();
    this.isLoggedIn = this.authenticationService.isLoggedIn();

    this.isCar = false;
    this.isMotorcycle = false;

  }

  async editCar(id: any) {
    await this.carService.getVehicle(id);
    this.router.navigate(["/vehicles-form"], { queryParams: { id } });
  }
  async deleteCar(id: any) {
    await this.carService.deleteVehicle(id);
    this.vehicles = await this.carService.getVehicles();

  }
  openCar(vehicle: Vehicle) {
    this.router.navigateByUrl(`vehicles-detail/${vehicle.id}`);
  }

}
