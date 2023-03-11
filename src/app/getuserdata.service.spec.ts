import { TestBed } from '@angular/core/testing';

import { GetuserdataService } from './getuserdata.service';

describe('GetuserdataService', () => {
  let service: GetuserdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetuserdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
