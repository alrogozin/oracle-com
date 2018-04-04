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

  ngOnInit() {
    this.tce_service.getAllTce()
      .then((tce_list) => {
            this.tce_list = tce_list;
            this.tce_list_loaded = true;
            console.log('done!', this.tce_list);
      });
  }

  constructor(private router: Router, private tce_service: TceService) { }

}
