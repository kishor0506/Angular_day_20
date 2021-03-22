import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitconvertComponent } from './unitconvert.component';

describe('UnitconvertComponent', () => {
  let component: UnitconvertComponent;
  let fixture: ComponentFixture<UnitconvertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitconvertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitconvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
