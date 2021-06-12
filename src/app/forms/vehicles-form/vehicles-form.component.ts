import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VehicleService } from '../../services/vehicle.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-vehicles-form',
  templateUrl: './vehicles-form.component.html',
  styleUrls: ['./vehicles-form.component.scss']
})
export class VehiclesFormComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    public vehicleService: VehicleService,
    private router: Router,
    private _location: Location
  ) { }

  isNew: boolean = true;
  vehicle: any = {};

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
      this.vehicle = await this.vehicleService.getVehicle(id);
    }
  }

  async createVehicle(vehicle: any) {
    await this.vehicleService.createVehicle(vehicle);
    this._location.back();

  }
  async editVehicle(vehicle: any) {
    await this.vehicleService.editVehicle(vehicle);
    this._location.back();

  }
}
