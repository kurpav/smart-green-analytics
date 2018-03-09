import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SitesState } from '../../reducers';

@Component({
  selector: 'sga-sites-page',
  templateUrl: './sites-page.component.html',
  styleUrls: ['./sites-page.component.scss']
})
export class SitesPageComponent implements OnInit {

  constructor(private store: Store<SitesState>) { }

  ngOnInit() {
  }

}
