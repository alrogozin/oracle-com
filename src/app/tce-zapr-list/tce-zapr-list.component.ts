import { ITceZapr } from './../model/tce_unit';
import { Component, OnInit } from '@angular/core';
import { TceService } from '../services/tce.service';
import { Router } from '@angular/router';
import { TceUnit } from '../model/tce_unit';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-tce-zapr-list',
  templateUrl: './tce-zapr-list.component.html',
  styleUrls: ['./tce-zapr-list.component.css']
})

export class TceZaprListComponent implements OnInit {

  tce_zapr: ITceZapr[];
  tce_zapr_loaded: boolean;
  public settings: Object;

  constructor(private router: Router, private tce_service: TceService, private _sanitizer: DomSanitizer) {
    this.settings = {
      defaultStyle: false,
      // selectMode: 'multi', -> выделение строк
      columns: {
          tce_abbr: {title: 'Аббр', width: '90px'},
          tce_name: {
              title: 'Наименование',
              type: 'html',
              // valuePrepareFunction: (data) => {return '<span class="cell-center">'+data+'</span>'}
        },
        beg_date_str: {title: 'Дата с', width: '120px', filter: false, sort: true},
        end_date_str: {title: 'Дата по', width: '120px', filter: false, sort: true},
        pdk: {title: 'ПДКx4', width: '120px', filter: false, sort: true},
        dimension: {title: 'Ед.измерения', width: '120px', filter: true, sort: true},
        ndoc_type: {title: 'Тип постановления', filter: true, sort: true},

//        dimension: {title: 'Ед.измерения', filter: true, sort: false},
//          detection_limit: {title: 'Предел обнаружения', filter: false, sort: false},
          num_order: {
              title: '№ пп',
              type: 'html',
              width: '80px',
              filter: false,
            }
        },
        actions: {
          delete: false,
          edit: false,
          add: false
        },
        pager: {
          display: true,
          perPage: 18
        },
        delete: {
          deleteButtonContent: 'Удалить'
        },
        attr: {
          class: 'table-bordered table-striped'
        }
    };

  }

  ngOnInit() {

    this.tce_service.getAllTceZapr()
      .then((tce_zapr) => {
            this.tce_zapr = tce_zapr;
            this.tce_zapr_loaded = true;
            console.log(this.tce_zapr);
       });
     }
}
