import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgforprodComponent } from './ngforprod.component';

describe('NgforprodComponent', () => {
  let component: NgforprodComponent;
  let fixture: ComponentFixture<NgforprodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgforprodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgforprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
