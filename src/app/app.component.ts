import { Component } from '@angular/core';
import firebase from 'firebase/app';
import "firebase/firestore";
import { CarsService } from './services/cars.service';
import { Car } from '../app/models/car.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'concessionaire';

  constructor(
    public router: Router,
    public carsService: CarsService
  ) { }

  car: Car = new Car();


  async ngOnInit() {
    await this.initFirebase();
  }

  async initFirebase() {
    const firebaseConfig = {
      apiKey: "AIzaSyC8Do90C7sTRf10tWZU_Bric4mAk5LJa-E",
      authDomain: "concesionaria-autos.firebaseapp.com",
      projectId: "concesionaria-autos",
      storageBucket: "concesionaria-autos.appspot.com",
      messagingSenderId: "1096578244105",
      appId: "1:1096578244105:web:b8db8d95532a876db262d8",
      measurementId: "G-6W8TYM3933"
    };
    // Initialize Firebase
    await firebase.initializeApp(firebaseConfig);

  }

}
