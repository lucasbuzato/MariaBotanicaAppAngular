import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhaplantapaginaComponent } from './minhaplantapagina.component';

describe('MinhaplantapaginaComponent', () => {
  let component: MinhaplantapaginaComponent;
  let fixture: ComponentFixture<MinhaplantapaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MinhaplantapaginaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinhaplantapaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
