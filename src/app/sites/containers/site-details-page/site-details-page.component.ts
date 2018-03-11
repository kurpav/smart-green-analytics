import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { SitesState, getEquipment } from '../../reducers/index';
import { Observable } from 'rxjs/Observable';
import { map, tap } from 'rxjs/operators';
import { IEquip } from '../../../shared/models/equip';
import * as actions from '../../actions/sites.actions';

@Component({
  selector: 'sga-site-details-page',
  templateUrl: './site-details-page.component.html',
  styleUrls: ['./site-details-page.component.scss']
})
export class SiteDetailsPageComponent implements OnInit {
  siteName$: Observable<string>;
  displayedColumns = ['name', 'lastUpdate', 'time', 's3Avg', 's4Avg', 'tempAvg'];
  equipment$: Observable<IEquip[]>;

  constructor(
    private store: Store<SitesState>,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.siteName$ = this.route.paramMap.pipe(map(params => params.get('siteId')));
    this.equipment$ = this.store.pipe(select(getEquipment));
  }

  ngOnInit() {
  }

  showGraph(row: IEquip) {
    this.store.dispatch(new actions.SelectEquipment(row.equip_name));
    this.router.navigate([row.equip_name], { relativeTo: this.route });
  }

}
