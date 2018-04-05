import { Component, OnInit } from '@angular/core';
import { TceService } from '../services/tce.service';
import { Router } from '@angular/router';
import { TceUnit } from '../model/tce_unit';

@Component({
  selector: 'app-tce-list',
  templateUrl: './tce-list.component.html',
  styleUrls: [
    './tce-list.component.css'
    , '../../themes/material.scss'
    , '../../themes/bootstrap.scss'
    , '../../themes/dark.scss'
  ],
})
export class TceListComponent implements OnInit {

  tce_list: TceUnit[];
  tce_list_loaded: boolean;
  reorderable = true;
  loadingIndicator = true;
  columns;
  rows;

  ngOnInit() {
    this.tce_service.getAllTce()
      .then((tce_list) => {
            this.tce_list = tce_list;
            this.tce_list_loaded = true;
            // console.log(this.tce_list);
      });

      this.columns = [
        {name: 'name', prop: 'Наименование'},
        {name: 'id'},
        {name: 'tce_id', prop: 'TceId'},
        {name: 'abbr'},
        {name: 'dimension', prop: 'dimension'},
        {name: 'detection_limit', prop: 'detectionlimit'},
        {name: 'num_order' }
      ];
  }

  constructor(private router: Router, private tce_service: TceService) { }

  getCellClass({ row, column, value }): any {
    return {
      'text-primary': value === 17
    };
  }

  getRowClass(row): any {
    return {
      'text-danger': row.tce_id === 219
      // 'bg-info': row.tce_id === 219
    };
  }

  getHeaderClass(): any {
    return {
      'text-light': true, 'bg-primary': true
    };
  }


}
