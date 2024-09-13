import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListatemperosComponent } from './listatemperos.component';

describe('ListatemperosComponent', () => {
  let component: ListatemperosComponent;
  let fixture: ComponentFixture<ListatemperosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListatemperosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListatemperosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
