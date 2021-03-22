import { TestBed } from '@angular/core/testing';

import { PaydetailsService } from './paydetails.service';

describe('PaydetailsService', () => {
  let service: PaydetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaydetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
