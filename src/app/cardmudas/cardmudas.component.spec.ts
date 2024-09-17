import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardmudasComponent } from './cardmudas.component';

describe('CardmudasComponent', () => {
  let component: CardmudasComponent;
  let fixture: ComponentFixture<CardmudasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardmudasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardmudasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
