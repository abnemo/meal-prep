import { Component, OnInit } from '@angular/core';

import { RecipeService } from 'prep/shared/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})

export class RecipeListComponent implements OnInit {
  items: any;
  recipes: any;

  constructor(
    private recipeService: RecipeService
  ) { }

  ngOnInit() {}

  removeRecipe(recipe: any) {
    console.log('removing', recipe);
  }
}
