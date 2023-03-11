import { TestBed } from '@angular/core/testing';

import { AdminaccessGuard } from './adminaccess.guard';

describe('AdminaccessGuard', () => {
  let guard: AdminaccessGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminaccessGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
