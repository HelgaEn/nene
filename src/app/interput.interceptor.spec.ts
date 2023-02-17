import { TestBed } from '@angular/core/testing';

import { InterputInterceptor } from './interput.interceptor';

describe('InterputInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      InterputInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: InterputInterceptor = TestBed.inject(InterputInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
