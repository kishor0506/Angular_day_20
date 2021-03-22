import { TestBed } from '@angular/core/testing';

import { FraudulentService } from './fraudulent.service';

describe('FraudulentService', () => {
  let service: FraudulentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FraudulentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
