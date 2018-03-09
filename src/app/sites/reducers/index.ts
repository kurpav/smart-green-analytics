import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';
import * as fromCollection from './collection.reducer';
import * as fromRoot from '../../reducers';

export interface SitesState {
  collection: fromCollection.State;
}

export interface State extends fromRoot.State {
  sites: SitesState;
}

export const reducers: ActionReducerMap<SitesState> = {
  collection: fromCollection.reducer
};

export const getSitesState = createFeatureSelector<SitesState>('sites');
