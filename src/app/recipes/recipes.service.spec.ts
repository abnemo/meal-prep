import { TestBed } from '@angular/core/testing';

import { RecipesService } from './recipes.service';

describe('RecipeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecipesService = TestBed.get(RecipesService);
    expect(service).toBeTruthy();
  });
});
