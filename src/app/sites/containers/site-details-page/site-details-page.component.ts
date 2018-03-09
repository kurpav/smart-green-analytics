import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SitesState } from '../../reducers/index';

@Component({
  selector: 'sga-site-details-page',
  templateUrl: './site-details-page.component.html',
  styleUrls: ['./site-details-page.component.scss']
})
export class SiteDetailsPageComponent implements OnInit {

  constructor(private store: Store<SitesState>) { }

  ngOnInit() {
  }

}
