import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sale } from 'src/app/models/sale.model';
import { SaleService } from 'src/app/services/sale.service';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})
export class SaleComponent implements OnInit {

  sale: Sale = new Sale();
  id: string = '';
  vehicle:any={
    id:'' 
  }; 

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    public saleService: SaleService,
    public vehicleService: VehicleService,
  ) { }

  async ngOnInit() {
    this.route.paramMap.subscribe(async params => {
      this.id = params.get('id') as string;
      this.saleService.getSale(this.id).subscribe(sale=>{this.sale=sale});
      this.vehicle = await this.vehicleService.getVehicle(this.sale.idItem);
      
    });

  }

}
