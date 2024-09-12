import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrinhoScreenComponent } from './carrinho-screen.component';

describe('CarrinhoScreenComponent', () => {
  let component: CarrinhoScreenComponent;
  let fixture: ComponentFixture<CarrinhoScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarrinhoScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrinhoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
