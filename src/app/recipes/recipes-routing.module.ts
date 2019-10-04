import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';

export const routes: Routes = [
  { path: '', component: RecipesComponent },
  { path: ':id', component: RecipeDetailsComponent },
  { path: ':id/edit', component: RecipeFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule {
  static components = [RecipesComponent, RecipeDetailsComponent, RecipeFormComponent]

}
