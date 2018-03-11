import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { SitesState, isLoading, getSites } from '../../reducers';
import * as collection from '../../actions/sites.actions';
import { Observable } from 'rxjs/Observable';
import { ISite } from '../../../shared/models/site';

@Component({
  selector: 'sga-sites-page',
  templateUrl: './sites-page.component.html',
  styleUrls: ['./sites-page.component.scss']
})
export class SitesPageComponent implements OnInit {
  sites$: Observable<ISite[]>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store<SitesState>) {
    this.isLoading$ = this.store.pipe(select(isLoading));
    this.sites$ = this.store.pipe(select(getSites));
  }

  ngOnInit() {
    this.store.dispatch(new collection.Load());
  }

}
