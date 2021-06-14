import { Component, OnInit } from '@angular/core';
import { Sale } from '../../models/sale.model'
import { SaleService } from '../../services/sale.service';
import * as moment from 'moment';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleService } from 'src/app/services/vehicle.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sales-form',
  templateUrl: './sales-form.component.html',
  styleUrls: ['./sales-form.component.scss']
})
export class SalesFormComponent implements OnInit {

  constructor(
    public saleService: SaleService,
    public vehicleService: VehicleService,
    private route: ActivatedRoute,
    private _location: Location,
    private router: Router,
  ) { }

  isNew: any;
  sale: Sale = new Sale();
  vehicle: any = {
    id: '',
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(async params => {
      const id = params["id"];
      const idVehicleUrl = params["auxIdVehicle"];
      this.sale.idItem = idVehicleUrl;
      this.isNew = (id == undefined || id == "");
      await this.init(id);
    })
  }

  onSubmit() {
    this.saleService.createSale(this.sale).subscribe(s => { this.sale = s });
    this.backClick();
  }

  async init(id: any) {
    this.vehicle = await this.vehicleService.getVehicle(this.sale.idItem);
    if (!this.isNew) {
      this.saleService.getSale(id).subscribe(s => { this.sale = s });
    }
  }
  backClick() {
    this._location.back();
  }

}
