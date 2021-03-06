import { CommonTools } from './../model/common.tools';
import { DeclHdrService } from './../services/decls.service';
import { ISupInp } from './../model/sup_inps';
import { Component, OnInit } from '@angular/core';
import { TceService } from '../services/tce.service';
import { Router } from '@angular/router';
import { CheckboxEditorComponent } from './../checkbox-editor/checkbox-editor.component';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { IDeclHdr } from '../model/decls';
import { CommonToolsService } from '../services/common.tools.service';


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
                private DeclService: DeclHdrService,
                private CommonToolsSrv: CommonToolsService
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
        this.tce_service.createSup(d).subscribe((data: any) => {
          this.tce_service.getAllSupInps()
          .then((sup_inp) => {
                this.sup_inp = sup_inp;
                this.CommonToolsSrv.NextId('decl_hdr_id_seq')
                .then((newId) => {
                  // Создается запись в Decl_Hdr
                  const iDH: IDeclHdr = {
                    id:               parseInt(newId, 10) + 1,
                    calc_on_date:     null,
                    sinp_id:          this.sup_inp[0].id,
                    is_current:       'Y',
                    date_in:          CommonTools.getSysdate(),
                    koeff_itogo:      null,
                    remark:           '',
                    usr:              this.sup_inp[0].usr
                  };
                  this.DeclService.createDeclHeader(iDH).subscribe((dataDH: any) => {
                    this.DeclService.getAllDeclHdr('Y', this.sup_inp[0].id)
                    .then((decl_hdr) => {
                      // Тут нужно выполнить заполнение ЗВ
                      this.CommonToolsSrv.callAnyProc('fill_data', {p_hdr_id: decl_hdr[0].id}).then((response) => {
                        console.log('done:', response);
                      });
                    });
                  });
                });

            this.sup_inp_loaded = true;
            event.confirm.resolve();
          });
        },
        (error) => {
          alert(error);
        });
    // Вопрос о создании нового выпуска (No):
    } else {
      event.confirm.reject();
    }
  }

  onDeleteConfirm(event) {
    if (window.confirm('Удалить выпуск "' + event.data.tag + '"?')) {
      this.CommonToolsSrv.callAnyProc('del_sinp', {p_sinp_id: event.data.id}).then((response) => {
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
