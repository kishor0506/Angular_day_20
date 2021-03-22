import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FraudulentComponent } from './fraudulent.component';

describe('FraudulentComponent', () => {
  let component: FraudulentComponent;
  let fixture: ComponentFixture<FraudulentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FraudulentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FraudulentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
