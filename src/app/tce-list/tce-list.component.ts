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
  reorderable = true;
  loadingIndicator = true;
   rowData: any[];
  columnDefs: any[];

  public rows:Array<any> = [];
  public columns:Array<any> = [
    {title: 'Name', name: 'name', filtering: {filterString: '', placeholder: 'Filter by name'}},
    {
      title: 'Position',
      name: 'position',
      sort: false,
      filtering: {filterString: '', placeholder: 'Filter by position'}
    },
    {title: 'Office', className: ['office-header', 'text-success'], name: 'office', sort: 'asc'},
    {title: 'Extn.', name: 'ext', sort: '', filtering: {filterString: '', placeholder: 'Filter by extn.'}},
    {title: 'Start date', className: 'text-warning', name: 'startDate'},
    {title: 'Salary ($)', name: 'salary'}
  ];
  public config:any = {
    paging: true,
    sorting: {columns: this.columns},
    filtering: {filterString: ''},
    className: ['table-striped', 'table-bordered']
  };
  public page: number = 1;
  public itemsPerPage: number = 10;
  public maxSize: number = 5;
  public numPages: number = 1;
  public length: number = 0;

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


}
