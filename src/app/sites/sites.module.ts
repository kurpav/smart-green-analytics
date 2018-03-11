import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { TranslateModule } from '@ngx-translate/core';

import { MaterialModule } from '../materal/material.module';

import { SitesEffects } from './effects/sites.effects';
import { reducers } from './reducers';
import { SiteService } from './services/site.service';
import { SitesPageComponent } from './containers/sites-page/sites-page.component';
import { SiteDetailsPageComponent } from './containers/site-details-page/site-details-page.component';
import { EquipmentAnalyticsPageComponent } from './containers/equipment-analytics-page/equipment-analytics-page.component';
import { SitePreviewListComponent } from './components/site-preview-list/site-preview-list.component';
import { SitePreviewComponent } from './components/site-preview/site-preview.component';
import { SiteDetailComponent } from './components/site-detail/site-detail.component';
import { EquipAnalyticsComponent } from './components/equip-analytics/equip-analytics.component';
import { SiteExistsGuard } from './guards/site-exists.guard';
import { EquipmentExistsGuard } from './guards/equipment-exists.guard';


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('sites', reducers),
    EffectsModule.forFeature([SitesEffects]),
    MaterialModule,
    HttpClientModule,
    RouterModule,
    ChartsModule,
    TranslateModule
  ],
  declarations: [
    SitesPageComponent,
    SiteDetailsPageComponent,
    EquipmentAnalyticsPageComponent,
    SitePreviewListComponent,
    SitePreviewComponent,
    SiteDetailComponent,
    EquipAnalyticsComponent
  ],
  providers: [
    SiteService,
    SiteExistsGuard,
    EquipmentExistsGuard
  ]
})
export class SitesModule { }
