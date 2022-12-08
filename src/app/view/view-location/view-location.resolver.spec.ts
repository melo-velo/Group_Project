import { TestBed } from '@angular/core/testing';

import { ViewLocationResolver } from './view-location.resolver';

describe('ViewLocationResolver', () => {
  let resolver: ViewLocationResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ViewLocationResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
