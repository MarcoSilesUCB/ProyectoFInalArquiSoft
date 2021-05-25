import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import firebase from 'firebase/app';
import "firebase/functions";
import { Car } from '../models/car.model'
@Injectable({
  providedIn: 'root'
})
export class TestService {

  cloudFunctionsURL: string = "https://us-central1-concesionaria-autos.cloudfunctions.net/";
  cars = {};
  car: Car = new Car();

  constructor(
    public http: HttpClient
  ) { }

  async test() {

    // const a = await firebase.functions().httpsCallable('helloWorld')(); 
    const a = await this.http.get(`${this.cloudFunctionsURL}helloWorld`, { responseType: 'json' }).toPromise();
    console.log(a);

  }
  async getCars() {
    const cars = await this.http.get(`${this.cloudFunctionsURL}getCars`, { responseType: 'json' }).toPromise();
    this.cars = Object.values(cars); // objeto a array 
    console.log(this.cars);
  }
  async getCar(id: any) {
    const car = await this.http.get(`${this.cloudFunctionsURL}getCar?id=${id}`, { responseType: 'json' }).toPromise();
    console.log(car);
  }
  async deleteCar(id: any) {
    const car = await this.http.get(`${this.cloudFunctionsURL}deleteCar?id=${id}`, { responseType: 'json' }).toPromise();
    console.log(car);
  }
  async createCar(car: Car) {

    console.log(car);

    let params = new HttpParams();
    params = params.append('car', JSON.stringify(car));


    await this.http.get(`${this.cloudFunctionsURL}createCar`, { responseType: 'json', params: params }).toPromise();
    console.log(car);
  }
  async editCar(car: Car) {

    console.log(car);

    let params = new HttpParams();
    params = params.append('car', JSON.stringify(car));


    await this.http.get(`${this.cloudFunctionsURL}editCar`, { responseType: 'json', params: params }).toPromise();
    console.log(car);
  }



}
