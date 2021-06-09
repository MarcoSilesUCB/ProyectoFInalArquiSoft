import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../../models/car.model';
import { CarService } from '../../services/car.service'

@Component({
  selector: 'app-detail-vehicle',
  templateUrl: './detail-vehicle.component.html',
  styleUrls: ['./detail-vehicle.component.scss']
})
export class DetailVehicleComponent implements OnInit {

  id: string = '';
  car: Car | any = new Car();

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    public carService: CarService

  ) { }

  async ngOnInit(): Promise<void> {
    this.route.paramMap.subscribe(async params => {
      this.id = params.get('id') as string;
      this.car = await this.carService.getCar(this.id);
    });
  }

}
