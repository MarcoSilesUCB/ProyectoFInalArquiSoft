import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import firebase from 'firebase/app';
import "firebase/functions";
import { Vehicle } from '../models/vehicle.model'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class CarService {

  cloudFunctionsURL: string = "https://us-central1-concesionaria-autos.cloudfunctions.net/";
  vehicles: any = [];


  constructor(
    public router: Router,
    public http: HttpClient
  ) { }

  async getVehicles() {
    const vehicles = await this.http.get(`${this.cloudFunctionsURL}getCars`, { responseType: 'json' }).toPromise();
    this.vehicles = Object.values(vehicles); // objeto a array 
    console.log(this.vehicles);
    return this.vehicles;
  }
  async getVehicle(id: any) {
    const db = firebase.firestore();
    let vehicle = await this.http.get(`${this.cloudFunctionsURL}getCar?id=${id}`, { responseType: 'json' }).toPromise();
    console.log(vehicle);
    // this.router.navigate(["/vehicles-form"], { queryParams: { id } });

    // return (await db.collection("vehicles").doc(id).get()).data() as Vehicle;
    return vehicle;
  }
  async deleteVehicle(id: any) {
    const vehicle = await this.http.get(`${this.cloudFunctionsURL}deleteCar?id=${id}`, { responseType: 'blob' }).toPromise();
    console.log(vehicle);
  }
  async createVehicle(vehicle: Vehicle) {

    console.log(vehicle);

    let params = new HttpParams();
    params = params.append('vehicle', JSON.stringify(vehicle));


    await this.http.get(`${this.cloudFunctionsURL}createCar`, { responseType: 'blob', params: params }).toPromise();
    console.log(vehicle);

  }
  async editVehicle(vehicle: Vehicle) {

    console.log(vehicle);

    let params = new HttpParams();
    params = params.append('vehicle', JSON.stringify(vehicle));


    await this.http.get(`${this.cloudFunctionsURL}editCar?id=${vehicle.id}`, { responseType: 'blob', params: params }).toPromise();

    console.log(vehicle);

  }



}
