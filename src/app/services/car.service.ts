import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import firebase from 'firebase/app';
import "firebase/functions";
import { Car } from '../models/car.model'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class CarService {

  cloudFunctionsURL: string = "https://us-central1-concesionaria-autos.cloudfunctions.net/";
  cars: any = [];


  constructor(
    public router: Router,
    public http: HttpClient
  ) { }

  async getCars() {
    const cars = await this.http.get(`${this.cloudFunctionsURL}getCars`, { responseType: 'json' }).toPromise();
    this.cars = Object.values(cars); // objeto a array 

    return this.cars;
  }
  async getCar(id: any) {
    const db = firebase.firestore();
    let car = await this.http.get(`${this.cloudFunctionsURL}getCar?id=${id}`, { responseType: 'json' }).toPromise();


    return car;
  }
  async deleteCar(id: any) {
    const car = await this.http.get(`${this.cloudFunctionsURL}deleteCar?id=${id}`, { responseType: 'blob' }).toPromise();

  }
  async createCar(car: Car) {



    let params = new HttpParams();
    params = params.append('car', JSON.stringify(car));


    await this.http.get(`${this.cloudFunctionsURL}createCar`, { responseType: 'blob', params: params }).toPromise();


  }
  async editCar(car: Car) {



    let params = new HttpParams();
    params = params.append('car', JSON.stringify(car));


    await this.http.get(`${this.cloudFunctionsURL}editCar?id=${car.id}`, { responseType: 'blob', params: params }).toPromise();



  }



}
