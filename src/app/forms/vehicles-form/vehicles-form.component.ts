import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Car } from '../../models/car.model'
import { Vehicle } from '../../models/vehicle.model'
import { CarService } from '../../services/car.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-vehicles-form',
  templateUrl: './vehicles-form.component.html',
  styleUrls: ['./vehicles-form.component.scss']
})
export class VehiclesFormComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    public carsService: CarService,
    private router: Router,
    private _location: Location
  ) { }

  isNew: boolean = true;
  vehicle: Vehicle | any = new Vehicle();

  async ngOnInit() {
    this.route.queryParams.subscribe(async params => {

      const id = params["id"];
      this.isNew = (id == undefined);
      await this.init(id);
    })
  }
  async init(id: any) {

    console.log("new ", this.isNew);
    if (!this.isNew) {
      this.vehicle = await this.carsService.getVehicle(id);
    }
  }

  async createVehicle(vehicle: Vehicle) {
    await this.carsService.createVehicle(vehicle);
    this._location.back();

  }
  async editVehicle(vehicle: Vehicle) {
    await this.carsService.editVehicle(vehicle);
    this._location.back();

  }



}
