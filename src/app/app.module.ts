import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppBoostrapModule } from './app-boostrap/app-boostrap.module';
import { AppComponent } from './app.component';
// import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

// ng2-smart-table
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { MainpageComponent } from './mainpage/mainpage.component';
import { TceListComponent } from './tce-list/tce-list.component';
import { TceService } from './services/tce.service';
import { CheckboxEditorComponent } from './checkbox-editor/checkbox-editor.component';
import { TceDetailComponent } from './tce-detail/tce-detail.component';
import { TceZaprListComponent } from './tce-zapr-list/tce-zapr-list.component';
import { SupInpComponent } from './sup-inp/sup-inp.component';
import { DeclDataComponent } from './decl-data/decl-data.component';
import { DeclHdrService } from './services/decls.service';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    TceListComponent,
    CheckboxEditorComponent,
    TceDetailComponent,
    TceZaprListComponent,
    SupInpComponent,
    DeclDataComponent
  ],
  imports: [
    BrowserModule,
    AppBoostrapModule,
    FormsModule,
    HttpModule,
    Ng2SmartTableModule,
    RouterModule.forRoot([
      {
        path: 'main',
        component: MainpageComponent
      },
      {
        path: '',
        redirectTo: '/main',
        pathMatch: 'full'
      },
      {
        path: 'tce_list',
        component: TceListComponent
      },
      {
        path: 'tce_detail',
        component: TceDetailComponent
      },
      {
        path: 'decl-data',
        component: DeclDataComponent
      },
      {
        path: 'tce_zapr_list',
        component: TceZaprListComponent
      }

      /*,
      {
        path: '',
        redirectTo: '/recipes',
        pathMatch: 'full'
      },
      {
        path: 'recipes/:recipe_id',
        component: RecipeDetailsComponent
      },
      */
    ])
  ],
  providers: [TceService, DeclHdrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
