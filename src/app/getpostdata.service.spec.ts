import { TestBed } from '@angular/core/testing';

import { GetpostdataService } from './getpostdata.service';

describe('GetpostdataService', () => {
  let service: GetpostdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetpostdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
