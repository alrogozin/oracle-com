import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppBoostrapModule } from './app-boostrap/app-boostrap.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { MainpageComponent } from './mainpage/mainpage.component';
import { TceListComponent } from './tce-list/tce-list.component';
import { TceService } from './services/tce.service';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    TceListComponent
  ],
  imports: [
    BrowserModule,
    AppBoostrapModule,
    FormsModule,
    HttpModule,
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
  providers: [TceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
