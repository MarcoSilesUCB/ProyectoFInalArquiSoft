import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Car } from '../../models/car.model'
import { CarsService } from '../../services/cars.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.scss']
})
export class CarsFormComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    public carsService: CarsService,
    private router: Router,
    private _location: Location
  ) { }

  isNew: boolean = true;
  car: Car | any = new Car();

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
      this.car = await this.carsService.getCar(id);
    }
  }

  async createCar(car: Car) {
    await this.carsService.createCar(car);
    this.goBack();

  }
  async editCar(car: Car) {
    await this.carsService.editCar(car);
    this.router.navigate(["/cars-list"]);
  }

  goBack() {
    this._location.back();
  }

}
