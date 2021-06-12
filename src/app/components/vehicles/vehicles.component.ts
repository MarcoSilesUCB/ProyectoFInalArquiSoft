import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
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
    public vehicleService: VehicleService,

  ) { }

  vehicles: any = [];
  isLoggedIn = false;

  async ngOnInit() {
    this.vehicles = await this.vehicleService.getVehicles();
    this.isLoggedIn = this.authenticationService.isLoggedIn();

  }

  async editVehicle(id: any) {
    await this.vehicleService.getVehicle(id);
    this.router.navigate(["/vehicles-form"], { queryParams: { id } });
  }
  async deleteVehicle(id: any) {
    await this.vehicleService.deleteVehicle(id);
    this.ngOnInit();

  }
  openVehicle(id: any) {
    this.router.navigateByUrl(`vehicles-detail/${id}`);

  }

}
