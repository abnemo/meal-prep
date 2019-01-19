import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MaterialModule} from '../app/material.module';

import {DashboardComponent} from './dashboard/dashboard.component';
import {PantryComponent} from './pantry/pantry.component';
import {RecipeListComponent} from './recipe-list/recipe-list.component';
import {RecipeComponent} from './recipe/recipe.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {WeekPrepComponent} from './week-prep/week-prep.component';


const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'recipe', component: RecipeComponent},
  {path: 'pantry', component: PantryComponent},
  {path: 'recipe-list', component: RecipeListComponent},
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: 'week-prep', component: WeekPrepComponent}
];

@NgModule({
  declarations: [
    PantryComponent, RecipeComponent, RecipeListComponent,
    ShoppingListComponent, WeekPrepComponent, DashboardComponent
  ],
  imports: [MaterialModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PrepModule {
}
