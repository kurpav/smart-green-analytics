import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SitesState } from '../../reducers/index';

@Component({
  selector: 'sga-equipment-analytics-page',
  templateUrl: './equipment-analytics-page.component.html',
  styleUrls: ['./equipment-analytics-page.component.scss']
})
export class EquipmentAnalyticsPageComponent implements OnInit {

  constructor(private store: Store<SitesState>) { }

  ngOnInit() {
  }

}
