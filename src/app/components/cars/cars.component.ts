import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car.model'
import { CarsService } from '../../services/cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  constructor(
    public carsService: CarsService
  ) { }

  cars: Car[] = [];

  async ngOnInit() {
    this.cars = await this.carsService.getCars();
  }

  async editCar(car: Car) {
    await this.carsService.getCar(car.id);
  }





}
