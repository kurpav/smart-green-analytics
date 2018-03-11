import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { SitesActions, SitesActionTypes } from '../actions/sites.actions';
import { mergeMap, catchError, map } from 'rxjs/operators';
import { SiteService } from '../services/site.service';
import * as collection from '../actions/sites.actions';

@Injectable()
export class SitesEffects {

  @Effect()
  effect$ = this.actions$.pipe(
    ofType(SitesActionTypes.LoadAction),
    mergeMap(() => this.siteService.getSitesList()),
    map(payload => new collection.LoadSuccess(payload))
  );

  constructor(
    private actions$: Actions,
    private siteService: SiteService
  ) {}
}
