import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car.model'
import { CarsService } from '../../services/cars.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  constructor(
    public router: Router,
    public carsService: CarsService
  ) { }

  cars: Car[] = [];

  async ngOnInit() {
    this.cars = await this.carsService.getCars();
  }

  async editCar(id: any) {
    await this.carsService.getCar(id);
  }
  async deleteCar(id: any) {
    await this.carsService.deleteCar(id);
    this.cars = await this.carsService.getCars();

  }





}
