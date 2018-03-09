import { NgModule } from '@angular/core';
import { MatToolbarModule, MatCardModule, MatButtonModule } from '@angular/material';

const MODULES = [
  MatToolbarModule,
  MatCardModule,
  MatButtonModule
];

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class MaterialModule { }
