import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleService } from '../../services/vehicle.service';
import { Car } from '../../models/car.model';
import { Motorcycle } from '../../models/motorcycle.model';

@Component({
  selector: 'app-detail-vehicle',
  templateUrl: './detail-vehicle.component.html',
  styleUrls: ['./detail-vehicle.component.scss']
})
export class DetailVehicleComponent implements OnInit {

  id: string = '';
  vehicle: any = {
    id: ''
  }

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    public vehicleService: VehicleService

  ) { }

  async ngOnInit(): Promise<void> {
    this.route.paramMap.subscribe(async params => {
      this.id = params.get('id') as string;
      this.vehicle = await this.vehicleService.getVehicle(this.id);
    });
  }

  async buyVehicle(id: any) {
    var auxIdVehicle = this.id;
    console.log(auxIdVehicle);
    this.router.navigate(["/sales-form"], { queryParams: { id, auxIdVehicle } });
  }

}
