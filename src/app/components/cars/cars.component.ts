import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car.model'
import { CarService } from '../../services/car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  constructor(
    public router: Router,
    public carService: CarService
  ) { }

  cars: Car[] = [];

  async ngOnInit() {
    this.cars = await this.carService.getCars();
  }

  async editCar(id: any) {
    await this.carService.getCar(id);
  }
  async deleteCar(id: any) {
    await this.carService.deleteCar(id);
    this.cars = await this.carService.getCars();

  }





}
