import { Component, OnInit } from '@angular/core';
import { TceService } from '../services/tce.service';
import { Router } from '@angular/router';
import { TceUnit } from '../model/tce_unit';

import {GridOptions} from 'ag-grid/main';

@Component({
  selector: 'app-tce-list',
  templateUrl: './tce-list.component.html',
  styleUrls: [
    './tce-list.component.css'
  ],
})
export class TceListComponent implements OnInit {

  tce_list: TceUnit[];
  tce_list_loaded: boolean;
  reorderable = true;
  loadingIndicator = true;
  columns: any[];
  rowData: any[];
  columnDefs: any[];



  ngOnInit() {
/*
    this.tce_service.getAllTce()
      .then((tce_list) => {
            this.tce_list = tce_list;
            this.tce_list_loaded = true;
            // console.log(this.tce_list);
       });
*/
      }

  constructor(private router: Router, private tce_service: TceService) {

    this.columnDefs = [
      {headerName: 'Make', field: 'make', hide: false},
      {headerName: 'Model', field: 'model', hide: false},
      {headerName: 'Price', field: 'price', hide: false}
    ];

    this.rowData = [
      {make: 'Toyota', model: 'Celica', price: 35000},
      {make: 'Ford', model: 'Mondeo', price: 32000},
      {make: 'Porsche', model: 'Boxter', price: 72000}
    ];

      //  this.columns = [
      //  {field: 'name', headerName: 'name'}
      //  {field: 'id', headerName: 'Id'},
      //  {field: 'tce_id', headerName: 'TceId'}
      //  {field: 'abbr', headerName: 'аббр'},
      //  {field: 'dimension', headerName: 'dimension'},
      //  {field: 'detection_limit', headerName: 'detectionlimit'},
      //  {field: 'num_order', headerName: '№ пп' }
     // ];
  }

  onGridReady(params) {
      params.api.sizeColumnsToFit();
  }
  selectAllRows() {
    // this.gridOptions.api.selectAll();
  }

}
