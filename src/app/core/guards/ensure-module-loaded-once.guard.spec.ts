import { TestBed, async, inject } from '@angular/core/testing';

import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard';

describe('EnsureModuleLoadedOnceGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnsureModuleLoadedOnceGuard]
    });
  });

  it('should ...', inject([EnsureModuleLoadedOnceGuard], (guard: EnsureModuleLoadedOnceGuard) => {
    expect(guard).toBeTruthy();
  }));
});
