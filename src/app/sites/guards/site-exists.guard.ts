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
export class SiteExistsGuard implements CanActivate {
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

  hasSiteInStore(id: string): Observable<boolean> {
    return this.store.pipe(
      select(fromSites.getSites),
      map(entities => !!entities.filter(entity => entity.site === id).length),
      tap(exists => { if (exists) { this.store.dispatch(new collection.SelectSite(id)); }}),
      take(1)
    );
  }

  hasSiteInApi(id: string): Observable<boolean> {
    return this.siteService.getSitesList().pipe(
      tap(sites => this.store.dispatch(new collection.LoadSuccess(sites))),
      map(entities => !!entities.filter(entity => entity.site === id).length),
      tap(exists => {
        if (!exists) {
          throw new Error('Site with specified id doesn\'t exist!');
        } else {
          this.store.dispatch(new collection.SelectSite(id));
        }
      }),
      catchError(() => {
        this.router.navigate(['/404']);
        return of(false);
      })
    );
  }

  hasSite(id: string): Observable<boolean> {
    return this.hasSiteInStore(id).pipe(
      switchMap(inStore => {
        if (inStore) {
          return of(inStore);
        }

        return this.hasSiteInApi(id);
      })
    );
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.waitForCollectionToLoad().pipe(
      switchMap(() => this.hasSite(route.params['siteId']))
    );
  }
}
