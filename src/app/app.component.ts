import { Component } from '@angular/core';
import firebase from 'firebase/app';
import "firebase/firestore";
import { TestService } from '../app/services/test.service';
import { Car } from '../app/models/car.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'concessionaire';

  constructor(
    public testService: TestService
  ) { }

  car: Car = new Car();


  async ngOnInit() {
    await this.initFirebase();
    // this.testService.test();
    this.testService.getCars();
    this.testService.getCar("xFnSDLVfd5ElvSD2kLZc");
    this.car.brand = "Nissan";
    this.car.color = "Black";
    this.car.id = "1234";
    this.testService.editCar(this.car);
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
