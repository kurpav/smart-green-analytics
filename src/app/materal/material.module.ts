import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
  MatGridListModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatTableModule,
  MatChipsModule
} from '@angular/material';

const MODULES = [
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
  MatGridListModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatTableModule,
  MatChipsModule
];

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class MaterialModule { }
