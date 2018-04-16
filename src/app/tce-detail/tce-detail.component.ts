import { ITceZV, ITceZVKoef } from './../model/tce_unit';
import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

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
  public TceZV: ITceZV[];
  public TceZVKoef: ITceZVKoef[];
  public settings: Object;
  public settings_2: Object;

  constructor(
                private route: ActivatedRoute,
                private router: Router,
                private tce_service: TceService,
                private location: Location
              ) {
                this.settings = {
                  defaultStyle: true,
                  columns: {
                      beg_date_str: {title: 'Дата с', width: '120px', filter: false, sort: false},
                      end_date_str: {title: 'Дата по', width: '120px', filter: false, sort: false},
                      grp_name: {title: 'Группа', filter: false, sort: false},
                      pdk: {title: 'ПДК', width: '120px', filter: false, sort: false},
                      pdk_lower: {title: 'ПДК (нижн)', width: '120px', filter: false, sort: false},
                      rough_koeff: {title: 'К-т груб.', width: '120px', filter: false, sort: false},
                    },
                    actions: {
                      delete: false,
                      edit: false,
                      add: false
                    },
                    pager: {
                      display: false,
                      perPage: 20
                    },
                    attr: {
                      class: 'table-bordered'
                    }
                };

                this.settings_2 = {
                  defaultStyle: true,
                  columns: {
                      beg_date_str: {title: 'Дата с', width: '120px', filter: false, sort: false},
                      end_date_str: {title: 'Дата по', width: '120px', filter: false, sort: false},
                      koef: {title: 'Коэф.возд.', width: '120px', filter: false, sort: false},
                      condition_: {title: 'Условие', filter: false, sort: false}
                    },
                    actions: {
                      delete: false,
                      edit: false,
                      add: false
                    },
                    pager: {
                      display: false,
                      perPage: 20
                    },
                    attr: {
                      class: 'table-bordered'
                    }
                };

              }

  ngOnInit() {
    this.route
    .queryParams
    .subscribe(params => {
      this.TceId = parseInt(params['tce_id'], 10) || 0;
      this.TceName = params['tce_name'] || '-';

    this.tce_service.getTceZV(this.TceId)
    .then((TceZV) => {
          this.TceZV = TceZV;
     });
     this.tce_service.getTceZVKoef(this.TceId)
     .then((TceZVKoef) => {
           this.TceZVKoef = TceZVKoef;
      });
    });
   }
   goBackButtonPressed(): void {
    this.location.back();
    }
}
