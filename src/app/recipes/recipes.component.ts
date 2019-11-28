import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Recipe } from 'src/app/core/models/recipe.model';
import { Router } from '@angular/router';
import { RecipesService } from './recipes.service';
import * as _ from 'lodash';

@Component({
  selector: 'mp-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})

export class RecipesComponent implements OnInit {
  recipes: Recipe[]
  data = {
    location: 'recipes',
    path: ['/recipes/0/edit']
  }
  selectedRecipes = [];

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

  removeRecipe(id: string) {
    this.recipes = this.recipes.filter(item => item.id !== id)
    this.recipeService.removeRecipe(id).subscribe()
  }

  onSwipe(event, recipe) {
    let index = this.recipes.indexOf(recipe)
    this.recipes.filter(elem => {
      if (elem.id === recipe.id) {
        this.recipes[index] = { ...recipe, inPrep: !recipe.inPrep }
        this.recipeService.updateRecipe(this.recipes[index]).subscribe(res => console.log(res))
      }
    })
  }

}
