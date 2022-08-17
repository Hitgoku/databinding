import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClass1Component } from './ng-class1.component';

describe('NgClass1Component', () => {
  let component: NgClass1Component;
  let fixture: ComponentFixture<NgClass1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgClass1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgClass1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
