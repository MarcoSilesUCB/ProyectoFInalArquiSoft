import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Spare } from '../../models/spare.model'
import { SpareService } from '../../services/spare.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-spares-form',
  templateUrl: './spares-form.component.html',
  styleUrls: ['./spares-form.component.scss']
})
export class SparesFormComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    public spareService: SpareService,
    private router: Router,
    private _location: Location
  ) { }

  isNew: boolean = true;
  spare: Spare | any = new Spare();

  async ngOnInit() {
    this.route.queryParams.subscribe(async params => {

      const id = params["id"];
      this.isNew = (id == undefined);
      await this.init(id);
    })
  }
  async init(id: any) {

    if (!this.isNew) {
      this.spare = await this.spareService.getSpare(id);
    }
  }

  async createSpare(spare: Spare) {
    await this.spareService.createSpare(spare);
    this._location.back();

  }
  async editSpare(spare: Spare) {
    await this.spareService.editSpare(spare);
    this._location.back();

  }

}
