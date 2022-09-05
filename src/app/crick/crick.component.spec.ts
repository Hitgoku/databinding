import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrickComponent } from './crick.component';

describe('CrickComponent', () => {
  let component: CrickComponent;
  let fixture: ComponentFixture<CrickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrickComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
