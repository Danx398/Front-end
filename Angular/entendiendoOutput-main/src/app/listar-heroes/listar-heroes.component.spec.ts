import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarHeroesComponent } from './listar-heroes.component';

describe('ListarHeroesComponent', () => {
  let component: ListarHeroesComponent;
  let fixture: ComponentFixture<ListarHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarHeroesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
