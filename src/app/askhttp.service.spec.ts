import { TestBed } from '@angular/core/testing';

import { AskhttpService } from './askhttp.service';

describe('AskhttpService', () => {
  let service: AskhttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AskhttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
