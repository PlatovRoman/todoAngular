import { TestBed } from '@angular/core/testing';

import { DateTransService } from './date-trans.service';

describe('DateTransService', () => {
  let service: DateTransService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateTransService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
