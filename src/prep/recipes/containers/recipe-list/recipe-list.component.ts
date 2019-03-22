import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from 'store';

import { RecipeService } from 'prep/shared/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  items: any;
  recipes: any;

  constructor(
    private store: Store,
    private recipeService: RecipeService
  ) { }

  ngOnInit() {
    this.items = this.store.select('recipesList');
    this.subscription = this.recipeService.recipeList$.subscribe(res => {
      this.recipes = res;
      console.log(this.recipes);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  removeRecipe(recipe: any) {
    console.log('removing', recipe);
  }
}
