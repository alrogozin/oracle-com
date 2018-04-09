import { Component, OnInit } from '@angular/core';
import { TceService } from '../services/tce.service';
import { Router } from '@angular/router';
import { TceUnit } from '../model/tce_unit';

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
  public settings: Object;

  ngOnInit() {

    this.tce_service.getAllTce()
      .then((tce_list) => {
            this.tce_list = tce_list;
            this.tce_list_loaded = true;
            // console.log(this.tce_list);
       });
     }

  constructor(private router: Router, private tce_service: TceService) {
    this.settings = {
      defaultStyle: false,
      selectMode: 'multi',
      columns: {
          abbr: {title: 'Аббр', width: '90px'},
          name: {
              title: 'Наименование',
              type: 'html',
              // valuePrepareFunction: (data) => {return '<span class="cell-center">'+data+'</span>'}
        },
        id: {
            title: 'cb',
            type: 'html',
            valuePrepareFunction: (data) => {return '<input type="checkbox" checked>'},
            filter: false
        },
          dimension: {title: 'Ед.измерения', filter: true, sort: false},
          detection_limit: {title: 'Предел обнаружения', filter: false, sort: false},
          num_order: {
              title: '№ пп',
              type: 'html',
              width: '80px',
              filter: false,
              // valuePrepareFunction: (data) => {return '<span class="text-info">'+data+'</span>'}
            }
        },
        actions: {
          delete: false,
          edit: false,
          add: false
        },
        pager: {
          display: true,
          perPage: 20
        },
        delete: {
          deleteButtonContent: 'Удалить'
        },
        attr: {
          class: 'table-bordered table-striped'
        }
    };
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

  onRowSelect(row: any): void{
    console.log('RS:', row);
  }
  // вроде, честнее работает!
  onUserRowSelect(row: any): void{
    console.log('URS:', row);
  }

}
