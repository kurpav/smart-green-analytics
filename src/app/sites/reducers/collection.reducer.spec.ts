import { reducer, initialState } from './collection.reducer';
import * as actions from '../actions/sites.actions';

describe('Collection Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });

    it('should set loading to true', () => {
      const action = new actions.Load();

      const result = reducer(initialState, action);

      expect(result.loading).toBe(true);
      expect(result.sites.length).toBe(0);
    });

    it('should set new sites and set loading to false', () => {
      const sites = [
        { site: 'Kiev4', equips: [] },
        { site: 'London2', equips: [] }
      ];
      const action = new actions.LoadSuccess(sites);

      const result = reducer(initialState, action);

      expect(result.loading).toBe(false);
      expect(result.sites).toBe(sites);
    });
  });
});
