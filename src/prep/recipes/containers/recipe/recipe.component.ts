import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent {
  constructor(
    private router: Router
  ) { }

  addRecipe(event: any) {
    console.log('Recipe', event);
    this.backToRecipes();
  }

  backToRecipes() {
    this.router.navigate(['recipes']);
  }
}
