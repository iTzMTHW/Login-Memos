import { TestBed } from '@angular/core/testing';

import { ChiamataHttpService } from './chiamata-http.service';

describe('ChiamataHttpService', () => {
  let service: ChiamataHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChiamataHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
