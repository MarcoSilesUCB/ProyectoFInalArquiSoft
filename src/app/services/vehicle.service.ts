import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import firebase from 'firebase/app';
import "firebase/functions";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  cloudFunctionsURL: string = "https://us-central1-concesionaria-autos.cloudfunctions.net/";
  vehicles: any = [];


  constructor(
    public router: Router,
    public http: HttpClient
  ) { }

  async getVehicles() {
    const vehicles = await this.http.get(`${this.cloudFunctionsURL}getVehicles`, { responseType: 'json' }).toPromise();
    this.vehicles = Object.values(vehicles); // objeto a array 

    return this.vehicles;
  }
  async getVehicle(id: any) {
    const db = firebase.firestore();
    let vehicle = await this.http.get(`${this.cloudFunctionsURL}getVehicle?id=${id}`, { responseType: 'json' }).toPromise();

    return vehicle;
  }

  async deleteVehicle(id: any) {
    await this.http.get(`${this.cloudFunctionsURL}deleteVehicle?id=${id}`, { responseType: 'blob' }).toPromise();
  }

  async createVehicle(vehicle: any) {
    let params = new HttpParams();
    params = params.append('vehicle', JSON.stringify(vehicle));
    await this.http.get(`${this.cloudFunctionsURL}createVehicle`, { responseType: 'blob', params: params }).toPromise();
  }

  async editVehicle(vehicle: any) {
    let params = new HttpParams();
    params = params.append('vehicle', JSON.stringify(vehicle));
    await this.http.get(`${this.cloudFunctionsURL}editVehicle?id=${vehicle.id}`, { responseType: 'blob', params: params }).toPromise();

  }
}
