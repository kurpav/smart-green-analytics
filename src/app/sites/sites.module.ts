import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

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


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('sites', reducers),
    EffectsModule.forFeature([SitesEffects]),
    MaterialModule,
    HttpClientModule
  ],
  declarations: [SitesPageComponent, SiteDetailsPageComponent, EquipmentAnalyticsPageComponent, SitePreviewListComponent, SitePreviewComponent, SiteDetailComponent, EquipAnalyticsComponent],
  providers: [SiteService]
})
export class SitesModule { }
