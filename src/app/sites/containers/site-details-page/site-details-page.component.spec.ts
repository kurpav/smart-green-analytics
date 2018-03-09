import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteDetailsPageComponent } from './site-details-page.component';
import { Store, StoreModule } from '@ngrx/store';

describe('SiteDetailsPageComponent', () => {
  let component: SiteDetailsPageComponent;
  let fixture: ComponentFixture<SiteDetailsPageComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ SiteDetailsPageComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteDetailsPageComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
