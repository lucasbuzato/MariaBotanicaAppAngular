import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardtemeprosComponent } from './cardtemepros.component';

describe('CardtemeprosComponent', () => {
  let component: CardtemeprosComponent;
  let fixture: ComponentFixture<CardtemeprosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardtemeprosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardtemeprosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
