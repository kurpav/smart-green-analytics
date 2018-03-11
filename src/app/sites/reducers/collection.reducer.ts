import { Action } from '@ngrx/store';
import { ISite } from '../../shared/models/site';
import { SitesActionTypes, SitesActions } from '../actions/sites.actions';

export interface State {
  loading: boolean;
  sites: ISite[];
}

export const initialState: State = {
  loading: false,
  sites: []
};

export function reducer(state = initialState, action: SitesActions): State {
  switch (action.type) {
    case SitesActionTypes.LoadAction:
      return { ...state, loading: true };
    case SitesActionTypes.LoadSuccessAction:
      return { ...state, sites: action.payload, loading: false };
    default:
      return state;
  }
}
