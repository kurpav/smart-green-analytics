import { Action } from '@ngrx/store';
import { SitesActions, SitesActionTypes } from '../actions/sites.actions';

export interface State {
  selectedSite: string;
  selectedEquipment: string;
}

export const initialState: State = {
  selectedSite: null,
  selectedEquipment: null,
};

export function reducer(state = initialState, action: SitesActions): State {
  switch (action.type) {

    case SitesActionTypes.SelectSiteAction:
      return { ...state, selectedSite: action.payload };

    case SitesActionTypes.SelectEquipmentAction:
      return { ...state, selectedEquipment: action.payload };

    default:
      return state;
  }
}
