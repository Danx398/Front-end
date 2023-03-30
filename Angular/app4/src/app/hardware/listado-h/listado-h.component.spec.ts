import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoHComponent } from './listado-h.component';

describe('ListadoHComponent', () => {
  let component: ListadoHComponent;
  let fixture: ComponentFixture<ListadoHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoHComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
