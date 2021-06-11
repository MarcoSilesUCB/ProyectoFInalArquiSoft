import { Component, OnInit } from '@angular/core';
import { Spare } from '../../models/spare.model'
import { SpareService } from '../../services/spare.service';
import { Router } from '@angular/router';
import { FilterService } from '../../services/filter.service';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-spares',
  templateUrl: './spares.component.html',
  styleUrls: ['./spares.component.scss']
})
export class SparesComponent implements OnInit {

  constructor(
    public router: Router,
    public spareService: SpareService,
    public filterService: FilterService,
    public authenticationService: AuthenticationService
  ) { }

  spares: Spare[] = [];
  filteredSpares: any = [];
  filter: any = {};
  filteredSpare = "";
  isLoggedIn = false;

  async ngOnInit() {
    this.isLoggedIn = this.authenticationService.isLoggedIn();
    this.filter = this.filterService.spareFilter;
    this.spares = await this.spareService.getSpares();
    this.filteredSpares = this.spares;

  }

  async editSpare(id: any) {
    await this.spareService.getSpare(id);
  }
  async deleteSpare(id: any) {
    await this.spareService.deleteSpare(id);
    this.spares = await this.spareService.getSpares();

  }

  filterSpare(event: any = '') {
    this.filteredSpares = this.spares.filter((spare: Spare) => {

      return (
        (!this.filter.brand || spare.brand === this.filter.brand)
        && (!this.filter.model || spare.model === this.filter.model)
      )
    });

    if (event) {
      this.search(event);
    }

  }
  search(parameter: string) {
    const words: string[] = parameter.toString().trim().split(' ');
    this.filteredSpares = this.filteredSpares.filter(
      (spare: Spare) => {
        let found = false;
        words.forEach(word => {
          if (spare.brand.toLowerCase().includes(word) || spare.brand.toUpperCase().includes(word) || spare.brand.includes(word)
            || (spare.model.toLowerCase().includes(word) || spare.model.toUpperCase().includes(word) || spare.model.includes(word))) {
            found = true;
          }
        });
        return found;
      }
    );
  }

}
