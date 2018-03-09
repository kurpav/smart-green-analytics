import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SitesModule } from './sites/sites.module';

import { AppComponent } from './core/containers/app/app.component';
import { reducers, metaReducers } from './reducers';
import { AppEffects } from './effects/app.effects';
import { environment } from '../environments/environment';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects]),
    ChartsModule,
    CoreModule,
    SitesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
