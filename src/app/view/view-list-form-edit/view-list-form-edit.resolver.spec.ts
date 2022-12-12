import { TestBed } from '@angular/core/testing';

import { ViewListFormEditResolver } from './view-list-form-edit.resolver';

describe('ViewListFormEditResolver', () => {
  let resolver: ViewListFormEditResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ViewListFormEditResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
