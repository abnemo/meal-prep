import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecipeService } from './recipe.service';
import { Recipe } from 'src/models/recipe.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { mergeMap, tap } from 'rxjs/operators';

@Component({
  templateUrl: './recipe.component.html',
})
export class RecipeComponent implements OnInit, OnDestroy {
  recipe: Recipe;
  private sub: Subscription
  constructor(
    private recipeService: RecipeService,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.sub = this.activeRoute.params
      .pipe(
        tap(params => console.log(params.id)),
        mergeMap(params => this.recipeService.getRecipe(params.id))
      )
      .subscribe((val) => {
        console.log('val', val)
        this.recipe = val
      })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
}
