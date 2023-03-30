import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelAngularComponent } from './model-angular.component';

describe('ModelAngularComponent', () => {
  let component: ModelAngularComponent;
  let fixture: ComponentFixture<ModelAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelAngularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
