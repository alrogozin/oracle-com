import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { TceService } from '../services/tce.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-decl-data',
  templateUrl: './decl-data.component.html',
  styleUrls: ['./decl-data.component.css']
})
export class DeclDataComponent implements OnInit {
  public VypId: number;
  public VypTag: string = 'n/a';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tce_service: TceService,
    private location: Location
  ) {
    this.route
    .queryParams
    .subscribe(params => {
      this.VypId = parseInt(params['id'], 10) || -888;
      this.VypTag = params['tag'] || '-';
      // this.TceName = params['tce_name'] || '-';
/*
    this.tce_service.getTceZV(this.TceId)
    .then((TceZV) => {
          this.TceZV = TceZV;
     });
     this.tce_service.getTceZVKoef(this.TceId)
     .then((TceZVKoef) => {
           this.TceZVKoef = TceZVKoef;
      });
*/
    });
  }


  ngOnInit() {
  }

   goBackButtonPressed(): void {
    this.location.back();
    }


}
