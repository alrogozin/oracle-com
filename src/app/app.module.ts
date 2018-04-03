import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppBoostrapModule } from './app-boostrap/app-boostrap.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { MainpageComponent } from './mainpage/mainpage.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent
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
      }
      /*,
      {
        path: 'editnewrecipe',
        component: EditNewRecipeComponent
      },
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
