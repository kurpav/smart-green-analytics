import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../materal/material.module';

import { AppComponent } from './containers/app/app.component';
import { NotFoundPageComponent } from './containers/not-found-page/not-found-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LangComponent } from './components/lang/lang.component';

const COMPONENTS = [
  AppComponent ,
  NavbarComponent,
  LangComponent,
  NotFoundPageComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    TranslateModule,
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class CoreModule { }
