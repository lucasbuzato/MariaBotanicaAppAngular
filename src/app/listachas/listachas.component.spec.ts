import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListachasComponent } from './listachas.component';

describe('ListachasComponent', () => {
  let component: ListachasComponent;
  let fixture: ComponentFixture<ListachasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListachasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListachasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
