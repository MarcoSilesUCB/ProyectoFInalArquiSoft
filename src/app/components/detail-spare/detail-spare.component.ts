import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Spare } from '../../models/spare.model';
import { SpareService } from '../../services/spare.service'

@Component({
  selector: 'app-detail-spare',
  templateUrl: './detail-spare.component.html',
  styleUrls: ['./detail-spare.component.scss']
})
export class DetailSpareComponent implements OnInit {

  id: string = '';
  spare: Spare | any = new Spare();

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    public spareService: SpareService

  ) { }

  async ngOnInit(): Promise<void> {
    this.route.paramMap.subscribe(async params => {
      this.id = params.get('id') as string;
      this.spare = await this.spareService.getSpare(this.id);
    });
  }

}
