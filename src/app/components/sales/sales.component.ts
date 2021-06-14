import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    public router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.saleService.getSales().subscribe(sales=>{this.sales=sales});
  }

  openSale(sale: Sale) {
    this.router.navigateByUrl(`sale/${sale.idSale}`);
  }

}
