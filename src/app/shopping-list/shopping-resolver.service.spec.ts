import { TestBed } from '@angular/core/testing';

import { ShoppingResolver } from './shopping-resolver.service';

describe('ShoppingResolver', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShoppingResolver = TestBed.get(ShoppingResolver);
    expect(service).toBeTruthy();
  });
});
