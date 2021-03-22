import { TestBed } from '@angular/core/testing';

import { UnitconvertService } from './unitconvert.service';

describe('UnitconvertService', () => {
  let service: UnitconvertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnitconvertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
