import { TestBed } from '@angular/core/testing';

import { QuoteservService } from './quoteserv.service';

describe('QuoteservService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuoteservService = TestBed.get(QuoteservService);
    expect(service).toBeTruthy();
  });
});
