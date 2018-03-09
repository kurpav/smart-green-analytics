import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentAnalyticsPageComponent } from './equipment-analytics-page.component';
import { Store, StoreModule } from '@ngrx/store';

describe('EquipmentAnalyticsPageComponent', () => {
  let component: EquipmentAnalyticsPageComponent;
  let fixture: ComponentFixture<EquipmentAnalyticsPageComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ EquipmentAnalyticsPageComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentAnalyticsPageComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
