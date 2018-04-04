import { Component, OnInit } from '@angular/core';
import { TceService } from '../services/tce.service';
import { Router } from '@angular/router';
import { TceUnit } from '../model/tce_unit';

@Component({
  selector: 'app-tce-list',
  templateUrl: './tce-list.component.html',
  styleUrls: ['./tce-list.component.css']
})
export class TceListComponent implements OnInit {

  tce_list: TceUnit[];
  tce_list_loaded: boolean;
  columns;
  rows;

  ngOnInit() {
    this.tce_service.getAllTce()
      .then((tce_list) => {
            this.tce_list = tce_list;
            this.tce_list_loaded = true;
      });
      this.rows = [
            {name: 'name_1', id: '1', tce_id: '1', abbr: 'abbr1', dimension: 'dimension_1', detection_limit: '0', num_order: '1'},
      ];
      this.columns = [
        {name: 'name'},
        {id: 'id'},
        {tce_id: 'tce_id'},
        {abbr: 'abbr'},
        {dimension: 'dimension'},
        {detection_limit: 'detection_limit'},
        {num_order:  'num_order' }
      ];
  }

  constructor(private router: Router, private tce_service: TceService) { }

}
