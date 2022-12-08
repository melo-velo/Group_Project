import { TestBed } from '@angular/core/testing';

import { ViewItemResolver } from './view-item.resolver';

describe('ViewItemResolver', () => {
  let resolver: ViewItemResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ViewItemResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
