import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs/Observable';

import { SitesEffects } from './sites.effects';

describe('SitesService', () => {
  let actions$: Observable<any>;
  let effects: SitesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SitesEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(SitesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
