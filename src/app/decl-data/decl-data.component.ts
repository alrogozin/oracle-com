import { DeclHdrService } from './../services/decls.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { DeclHdr } from '../model/decls';


@Component({
  selector: 'app-decl-data',
  templateUrl: './decl-data.component.html',
  styleUrls: ['./decl-data.component.css']
})
export class DeclDataComponent implements OnInit {
  public VypId: number;
  public VypTag: string = 'n/a';
  public DeclHdrList: DeclHdr[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private declHdrService: DeclHdrService
  ) {
    this.route
    .queryParams
    .subscribe(params => {
      this.VypId = parseInt(params['id'], 10) || -888;
      this.VypTag = params['tag'] || '-';

      this.declHdrService.getAllDeclHdr('Y', this.VypId)
      .then((DeclHdrList) => {
            this.DeclHdrList = DeclHdrList;
            console.log(this.DeclHdrList);
       });
  
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
