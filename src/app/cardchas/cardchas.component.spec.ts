import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardchasComponent } from './cardchas.component';

describe('CardchasComponent', () => {
  let component: CardchasComponent;
  let fixture: ComponentFixture<CardchasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardchasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardchasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
