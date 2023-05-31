import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppListado1Component } from './app-listado1.component';

describe('AppListado1Component', () => {
  let component: AppListado1Component;
  let fixture: ComponentFixture<AppListado1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppListado1Component]
    });
    fixture = TestBed.createComponent(AppListado1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
