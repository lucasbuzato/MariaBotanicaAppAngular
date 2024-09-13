import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginamudasComponent } from './paginamudas.component';

describe('PaginamudasComponent', () => {
  let component: PaginamudasComponent;
  let fixture: ComponentFixture<PaginamudasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginamudasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginamudasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
