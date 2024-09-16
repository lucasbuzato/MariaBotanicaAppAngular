import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhasPlantasComponent } from './minhas-plantas.component';

describe('MinhasPlantasComponent', () => {
  let component: MinhasPlantasComponent;
  let fixture: ComponentFixture<MinhasPlantasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MinhasPlantasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinhasPlantasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
