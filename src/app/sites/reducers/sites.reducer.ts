import { Action } from '@ngrx/store';
import { SitesActions, SitesActionTypes } from '../actions/sites.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: SitesActions): State {
  switch (action.type) {

    case SitesActionTypes.SitesAction:
      return state;


    default:
      return state;
  }
}
