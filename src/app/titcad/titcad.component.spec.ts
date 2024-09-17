import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitcadComponent } from './titcad.component';

describe('TitcadComponent', () => {
  let component: TitcadComponent;
  let fixture: ComponentFixture<TitcadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TitcadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitcadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
