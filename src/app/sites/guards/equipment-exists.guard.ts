import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { filter, take, map, tap, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import * as fromSites from '../reducers';
import * as collection from '../actions/sites.actions';
import { SiteService } from '../services/site.service';
import { _throw } from 'rxjs/observable/throw';

/**
 * Guards are hooks into the route resolution process, providing an opportunity
 * to inform the router's navigation process whether the route should continue
 * to activate this route. Guards must return an observable of true or false.
 */
@Injectable()
export class EquipmentExistsGuard implements CanActivate {
  constructor(
    private store: Store<fromSites.State>,
    private router: Router,
    private siteService: SiteService
  ) {}

  waitForCollectionToLoad(): Observable<boolean> {
    return this.store.pipe(
      select(fromSites.isLoading),
      filter(loading => !loading),
      take(1)
    );
  }

  hasEquipmentInStore(siteId: string, equipmentId: string): Observable<boolean> {
    return this.store.pipe(
      select(fromSites.getSites),
      map(entities => entities.filter(entity => entity.site === siteId)),
      map(entities => {
        if (entities.length) {
          this.store.dispatch(new collection.SelectSite(siteId));
          return !!entities.pop().equips.filter(eq => eq.equip_name === equipmentId).length;
        }
        return false;
      }),
      tap(exists => { if (exists) { this.store.dispatch(new collection.SelectEquipment(equipmentId)); } }),
      take(1)
    );
  }

  hasEquipmentInApi(siteId: string, equipmentId: string): Observable<boolean> {
    return this.siteService.getSitesList().pipe(
      tap(sites => this.store.dispatch(new collection.LoadSuccess(sites))),
      map(entities => entities.filter(entity => entity.site === siteId)),
      map(entities => {
        if (!entities.length) {
          throw new Error('Site with specified id doesn\'t exist!');
        } else {
          this.store.dispatch(new collection.SelectSite(siteId));
          return !!entities.pop().equips.filter(eq => eq.equip_name === equipmentId).length;
        }
      }),
      tap(exists => {
        if (exists) {
          this.store.dispatch(new collection.SelectEquipment(equipmentId));
        } else {
          throw new Error('Equipment with specified id doesn\'t exist!');
        }
      }),
      catchError(() => {
        this.router.navigate(['/404']);
        return of(false);
      })
    );
  }

  hasEquipment(siteId: string, equipmentId: string): Observable<boolean> {
    return this.hasEquipmentInStore(siteId, equipmentId).pipe(
      switchMap(inStore => {
        if (inStore) {
          return of(inStore);
        }

        return this.hasEquipmentInApi(siteId, equipmentId);
      })
    );
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.waitForCollectionToLoad().pipe(
      switchMap(() => this.hasEquipment(route.params['siteId'], route.params['equipmentId']))
    );
  }
}
