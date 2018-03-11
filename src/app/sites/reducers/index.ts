import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';
import * as fromCollection from './collection.reducer';
import * as fromSites from './sites.reducer';
import * as fromRoot from '../../reducers';

export interface SitesState {
  collection: fromCollection.State;
  sites: fromSites.State;
}

export interface State extends fromRoot.State {
  sites: SitesState;
}

export const reducers: ActionReducerMap<SitesState> = {
  collection: fromCollection.reducer,
  sites: fromSites.reducer
};

export const getSitesState = createFeatureSelector<SitesState>('sites');

export const getCollectionState = createSelector(getSitesState, state => state.collection);


export const isLoading = createSelector(getCollectionState, state => state.loading);
export const getSites = createSelector(getCollectionState, state => state.sites);


export const getSiteState = createSelector(getSitesState, state => state.sites);

export const getSelectedSite = createSelector(getSiteState, state => state.selectedSite);
export const getSelectedEquipment = createSelector(getSiteState, state => state.selectedEquipment);

export const getEquipment = createSelector(getSelectedSite, getSites, (id, sites) => {
  return sites.filter(site => site.site === id).map(site => site.equips).pop();
});

export const getGraphData = createSelector(getSelectedEquipment, getEquipment, (id, equipments) => {
  return equipments.filter(equipment => equipment.equip_name === id).map(equipment => equipment.timeseries).pop();
});
