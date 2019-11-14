import { TestBed } from '@angular/core/testing';

import { ShoppingResolverService } from './shopping-resolver.service';

describe('ShoppingResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShoppingResolverService = TestBed.get(ShoppingResolverService);
    expect(service).toBeTruthy();
  });
});
