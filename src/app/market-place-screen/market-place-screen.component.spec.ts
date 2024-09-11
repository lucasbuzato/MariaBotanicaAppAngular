import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketPlaceScreenComponent } from './market-place-screen.component';

describe('MarketPlaceScreenComponent', () => {
  let component: MarketPlaceScreenComponent;
  let fixture: ComponentFixture<MarketPlaceScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarketPlaceScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketPlaceScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
