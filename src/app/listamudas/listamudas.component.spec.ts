import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListamudasComponent } from './listamudas.component';

describe('ListamudasComponent', () => {
  let component: ListamudasComponent;
  let fixture: ComponentFixture<ListamudasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListamudasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListamudasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
