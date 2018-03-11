import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SitesPageComponent } from './sites/containers/sites-page/sites-page.component';
import { NotFoundPageComponent } from './core/containers/not-found-page/not-found-page.component';
import { SiteDetailsPageComponent } from './sites/containers/site-details-page/site-details-page.component';
import { SiteExistsGuard } from './sites/guards/site-exists.guard';
import { EquipmentAnalyticsPageComponent } from './sites/containers/equipment-analytics-page/equipment-analytics-page.component';
import { EquipmentExistsGuard } from './sites/guards/equipment-exists.guard';

const routes: Routes = [
  { path: '', redirectTo: 'sites', pathMatch: 'full' },
  { path: 'sites', component: SitesPageComponent },
  { path: 'sites/:siteId', component: SiteDetailsPageComponent, canActivate: [SiteExistsGuard] },
  { path: 'sites/:siteId/:equipmentId', component: EquipmentAnalyticsPageComponent, canActivate: [EquipmentExistsGuard] },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
