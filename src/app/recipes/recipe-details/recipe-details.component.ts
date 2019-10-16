import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from 'src/models/recipe.model';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'mp-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit, OnDestroy {
  recipe: Recipe;
  private sub: Subscription

  constructor(
    private recipesService: RecipesService,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.sub = this.activeRoute.params
      .pipe(
        mergeMap(params => this.recipesService.getRecipe(params.id))
      )
      .subscribe((val) => {
        this.recipe = val
      })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
}
