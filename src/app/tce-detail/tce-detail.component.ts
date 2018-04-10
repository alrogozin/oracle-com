import { Component, OnInit, Input } from '@angular/core';
import { TceService } from '../services/tce.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { TceUnit } from '../model/tce_unit';


@Component({
  selector: 'app-tce-detail',
  templateUrl: './tce-detail.component.html',
  styleUrls: ['./tce-detail.component.css']
})
export class TceDetailComponent implements OnInit {

  public TceId: number;
  public TceName: string;

  constructor(
                private route: ActivatedRoute,
                private router: Router,
                private tce_service: TceService
              ) {
  }

  ngOnInit() {
    this.route
    .queryParams
    .subscribe(params => {
      this.TceId = parseInt(params['tce_id']) || 0;
      this.TceName = params['tce_name'] || '-';
    });
  }

}
