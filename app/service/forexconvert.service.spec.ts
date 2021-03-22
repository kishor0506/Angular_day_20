import { TestBed } from '@angular/core/testing';

import { ForexconvertService } from './forexconvert.service';

describe('ForexconvertService', () => {
  let service: ForexconvertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForexconvertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
