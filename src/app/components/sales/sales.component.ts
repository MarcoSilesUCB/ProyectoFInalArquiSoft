import { Component, OnInit } from '@angular/core';
import { Sale } from 'src/app/models/sale.model';
import { SaleService } from 'src/app/services/sale.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  sales: Sale[]=[];

  constructor(
    public saleService: SaleService,
  ) { }

  ngOnInit(): void {
    this.saleService.getSales().subscribe(sales=>{this.sales=sales});
  }

}
