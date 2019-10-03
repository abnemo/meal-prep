import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/models/recipe.model';
import { Router } from '@angular/router';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'mp-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[]
  data = {
    location: 'recipes',
    path: ['/recipes/0/edit']
  }

  constructor(
    private router: Router,
    private recipeService: RecipesService
  ) { }

  ngOnInit() {
    this.recipeService.getRecipeList().subscribe(val => this.recipes = val)
  }

  goToRecipe(id: string) {
    this.router.navigate([`/recipes/${id}`])
  }

  removeRecipe(event: string) {
    this.recipeService.removeRecipe(event)
  }

}
