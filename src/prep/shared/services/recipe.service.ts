import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Store } from 'store';
import { AuthService } from 'auth/shared/services/auth/auth.service';

export interface Recipe {
  name: string;
  ingredients: string[];
  instructions: string;
  $key: string;
}

@Injectable()
export class RecipeService {
  recipeList$: Observable<any> = this.db.list(`recipeList/${this.uid}`).valueChanges()
    .pipe(tap(next => this.store.set('recipesList', next)));

  constructor(
    private store: Store,
    private db: AngularFireDatabase,
    private authService: AuthService
  ) { }

  get uid() {
    return this.authService.user!.uid;
  }

  addRecipe(recipe: Recipe) {
    console.log(this.uid);
    this.db.list(`recipeList/${this.uid}`).push(recipe);
  }

  // deleteRecipe(recipe: Recipe) {
  //   this.db.list(`recipeList/${this.uid}`).delete(recipe)
  // }
}
