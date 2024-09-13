import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatemperosComponent } from './paginatemperos.component';

describe('PaginatemperosComponent', () => {
  let component: PaginatemperosComponent;
  let fixture: ComponentFixture<PaginatemperosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginatemperosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginatemperosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
