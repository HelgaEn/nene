import { TestBed } from '@angular/core/testing';

import { HttpResolverResolver } from './http-resolver.resolver';

describe('HttpResolverResolver', () => {
  let resolver: HttpResolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(HttpResolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
