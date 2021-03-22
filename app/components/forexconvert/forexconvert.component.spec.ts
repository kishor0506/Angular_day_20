import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForexconvertComponent } from './forexconvert.component';

describe('ForexconvertComponent', () => {
  let component: ForexconvertComponent;
  let fixture: ComponentFixture<ForexconvertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForexconvertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForexconvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
