import { Component, OnInit } from '@angular/core';
import { Spare } from '../../models/spare.model'
import { SpareService } from '../../services/spare.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spares',
  templateUrl: './spares.component.html',
  styleUrls: ['./spares.component.scss']
})
export class SparesComponent implements OnInit {

  constructor(
    public router: Router,
    public spareService: SpareService
  ) { }

  spares: Spare[] = [];

  async ngOnInit() {
    this.spares = await this.spareService.getSpares();
  }

  async editSpare(id: any) {
    await this.spareService.getSpare(id);
  }
  async deleteSpare(id: any) {
    await this.spareService.deleteSpare(id);
    this.spares = await this.spareService.getSpares();

  }

}
