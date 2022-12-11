import { TestBed } from '@angular/core/testing';

import { ViewLocationFormEditResolver } from './view-location-form-edit.resolver';

describe('ViewLocationFormEditResolver', () => {
  let resolver: ViewLocationFormEditResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ViewLocationFormEditResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
