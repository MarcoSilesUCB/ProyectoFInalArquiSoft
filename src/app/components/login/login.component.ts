import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';
  isLogged = true;

  constructor(
    public authenticationService: AuthenticationService,
    public router: Router,
    public route: ActivatedRoute,
  ) { }

  async ngOnInit() {

  }

  async login() {
    this.email = this.email.replace(/\s/g, '');
    await this.authenticationService.login(this.email, this.password);
    this.isLogged = await this.authenticationService.isLoggedIn();

    if (this.isLogged) {
      this.router.navigate(["/vehicles-list"]);
    }
  }

}
