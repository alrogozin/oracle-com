import { CommonTools } from './../model/common.tools';
import { DeclHdrService } from './../services/decls.service';
import { ISupInp } from './../model/sup_inps';
import { Component, OnInit } from '@angular/core';
import { TceService } from '../services/tce.service';
import { Router } from '@angular/router';
import { CheckboxEditorComponent } from './../checkbox-editor/checkbox-editor.component';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { IDeclHdr } from '../model/decls';


@Component({
  selector: 'app-sup-inp',
  templateUrl: './sup-inp.component.html',
  styleUrls: ['./sup-inp.component.css']
})
export class SupInpComponent implements OnInit {

  sup_inp: ISupInp[];
  sup_inp_loaded: boolean;
  public settings: Object;

  ngOnInit() {

    this.tce_service.getAllSupInps()
      .then((sup_inp) => {
            this.sup_inp = sup_inp;
            this.sup_inp_loaded = true;
            // console.log(this.sup_inp);
       });
     }

  constructor(
                private router: Router,
                private tce_service: TceService,
                private _sanitizer: DomSanitizer,
                private DeclService: DeclHdrService
              ) {
    this.settings = {
      defaultStyle: false,
      hoDataMessage: 'Нет данных',
      columns: {
          tag: {title: 'Код', width: '100px', filter: false, sort: true},
          remark: {
              title: 'Описание',
              filter: false,
              sort: false
        },
        id: {
          title: '',
          type: 'html',
          width: '100px',
          // valuePrepareFunction: (data) => {return '<a href="#">'+data+'</a>'},
          valuePrepareFunction: (data) => { return '<span class="btn btn-info btn-sm text-light" role="button">Подробности</span>' },
          filter: false
        },
      },
        actions: {
          delete: true,
          edit: true,
          add: true,
          columnTitle: 'Действия'
        },
        add: {
          addButtonContent: 'Новая запись',
          createButtonContent: 'Создать',
          cancelButtonContent: 'Отмена',
          confirmCreate: true
        },
        edit: {
          editButtonContent: 'Изменить',
          saveButtonContent: 'Сохранить',
          cancelButtonContent: 'Отмена',
          confirmSave: true
        },
        pager: {
          display: false,
          perPage: 15
        },
        delete: {
          deleteButtonContent: 'Удалить',
          confirmDelete: true
        },
        attr: {
          class: 'table-bordered table-striped'
        }
    };
  }

  getCheckBoxRender(data: any): SafeHtml {
    if (data === 'Y') {
      return this._sanitizer.bypassSecurityTrustHtml('<input type="checkbox" checked="true"  onclick="return false">');
    } else {
      return this._sanitizer.bypassSecurityTrustHtml('<input type="checkbox" checked="false"  onclick="return false">');
    }
  }

  onUserRowSelect(row: any): void {
    console.log('URS: id==', row.data.id, row.data.tag);
    this.router.navigate(['/decl-data'], { queryParams: {id: row.data.id, tag: row.data.tag}});
  }

  onCreateConfirm(event) {
    if (window.confirm('Создать новый выпуск?')) {
        const d: ISupInp = {is_active: 'Y', remark: event.newData.remark, tag: event.newData.tag, usr: -888};

        this.sup_inp.push(d);
        this.tce_service.createSup(d).subscribe((data: any) => {
          this.tce_service.getAllSupInps()
          .then((sup_inp) => {
                this.sup_inp = sup_inp;
                console.log('onCreateConfirm last.id=', this.sup_inp[0].id, new Date().getTimezoneOffset()); //Date.now().toString());
                const iDH: IDeclHdr = {
                    id:               -1,
                    calc_on_date:     null,
                    sinp_id:          this.sup_inp[0].id,
                    is_current:       'Y',
                    date_in:          CommonTools.getSysdate(),
                    koeff_itogo:      null,
                    remark:           '',
                    usr:              this.sup_inp[0].usr
                  };
                  this.DeclService.createDeclHeader(iDH).subscribe((dataDH: any) => {
                    console.log('dataDH:', dataDH);
                  });
                this.sup_inp_loaded = true;
                event.confirm.resolve();
          });
        },
        (error) => {
          alert(error);
        });
        console.log(event.newData);
    } else {
      event.confirm.reject();
    }
  }

  onDeleteConfirm(event) {
    if (window.confirm('Удалить выпуск "' + event.data.tag + '"?')) {
        this.tce_service.deleteSup(event.data.id.toString()).subscribe((data: any) => {
          this.tce_service.getAllSupInps()
          .then((sup_inp) => {
                this.sup_inp = sup_inp;
                this.sup_inp_loaded = true;
                event.confirm.resolve();
          });
        },
        (error) => {
          alert(error);
        });
      } else {
      event.confirm.reject();
    }
  }

  onSaveConfirm(event) {
    if (window.confirm('Сохранить изменения ?')) {
        this.tce_service.updateSup(event.newData).subscribe((data: any) => {
          this.tce_service.getAllSupInps()
          .then((sup_inp) => {
                this.sup_inp = sup_inp;
                this.sup_inp_loaded = true;
                event.confirm.resolve();
          });
        },
        (error) => {
          alert(error);
        });
      } else {
      event.confirm.reject();
    }
  }

}
