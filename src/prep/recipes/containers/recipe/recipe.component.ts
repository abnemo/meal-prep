import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Recipe, RecipeService } from 'prep/shared/services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent {
  constructor(
    private recipeService: RecipeService,
    private router: Router
  ) { }

  async addRecipe(event: Recipe) {
    console.log('Reicpe', event);
    // await this.recipeService.addRecipe(event);
    this.backToRecipes();
  }

  backToRecipes() {
    this.router.navigate(['recipes']);
  }
}
