import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import firebase from 'firebase/app';
import "firebase/functions";
import { Spare } from '../models/spare.model'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SpareService {
  cloudFunctionsURL: string = "https://us-central1-concesionaria-autos.cloudfunctions.net/";
  spares: any = [];

  constructor(
    public router: Router,
    public http: HttpClient
  ) { }

  async getSpares() {
    const spares = await this.http.get(`${this.cloudFunctionsURL}getSpares`, { responseType: 'json' }).toPromise();
    this.spares = Object.values(spares); // objeto a array 

    return this.spares;
  }
  async getSpare(id: any) {
    const db = firebase.firestore();
    let spare = await this.http.get(`${this.cloudFunctionsURL}getSpare?id=${id}`, { responseType: 'json' }).toPromise();


    return spare;
  }
  async deleteSpare(id: any) {
    const spare = await this.http.get(`${this.cloudFunctionsURL}deleteSpare?id=${id}`, { responseType: 'blob' }).toPromise();

  }
  async createSpare(spare: Spare) {



    let params = new HttpParams();
    params = params.append('spare', JSON.stringify(spare));


    await this.http.get(`${this.cloudFunctionsURL}createSpare`, { responseType: 'blob', params: params }).toPromise();


  }
  async editSpare(spare: Spare) {



    let params = new HttpParams();
    params = params.append('spare', JSON.stringify(spare));


    await this.http.get(`${this.cloudFunctionsURL}editSpare?id=${spare.id}`, { responseType: 'blob', params: params }).toPromise();



  }
}
