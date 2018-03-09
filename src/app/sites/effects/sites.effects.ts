import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { SitesActions, SitesActionTypes } from '../actions/sites.actions';

@Injectable()
export class SitesEffects {

  @Effect()
  effect$ = this.actions$.ofType(SitesActionTypes.SitesAction);

  constructor(private actions$: Actions) {}
}
