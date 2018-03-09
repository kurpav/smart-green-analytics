import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SitesPageComponent } from './sites/containers/sites-page/sites-page.component';
import { NotFoundPageComponent } from './core/containers/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'sites', pathMatch: 'full' },
  { path: 'sites', component: SitesPageComponent },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
