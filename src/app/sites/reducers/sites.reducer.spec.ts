import { reducer, initialState } from './sites.reducer';
import * as actions from '../actions/sites.actions';

describe('Sites Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });

    it('should set current site id', () => {
      const siteId = 'Kyiv23';
      const action = new actions.SelectSite(siteId);

      const result = reducer(initialState, action);

      expect(result.selectedSite).toBe(siteId);
    });

    it('should set current equipment id', () => {
      const equipmentId = 'Freezer13';
      const action = new actions.SelectEquipment(equipmentId);

      const result = reducer(initialState, action);

      expect(result.selectedEquipment).toBe(equipmentId);
    });
  });
});
