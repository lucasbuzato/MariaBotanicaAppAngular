import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginachasComponent } from './paginachas.component';

describe('PaginachasComponent', () => {
  let component: PaginachasComponent;
  let fixture: ComponentFixture<PaginachasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginachasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginachasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
