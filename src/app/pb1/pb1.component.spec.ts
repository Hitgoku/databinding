import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PB1Component } from './pb1.component';

describe('PB1Component', () => {
  let component: PB1Component;
  let fixture: ComponentFixture<PB1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PB1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PB1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
