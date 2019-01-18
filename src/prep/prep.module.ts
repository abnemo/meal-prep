import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PantryComponent } from './pantry/pantry.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { WeekPrepComponent } from './week-prep/week-prep.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '../app/material.module';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'recipe', component: RecipeComponent },
  { path: 'pantry', component: PantryComponent },
  { path: 'recipe-list', component: RecipeListComponent },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'week-prep', component: WeekPrepComponent }
];

@NgModule({
  declarations: [
    PantryComponent,
    RecipeComponent,
    RecipeListComponent,
    ShoppingListComponent,
    WeekPrepComponent,
    DashboardComponent
  ],
  imports: [
    MaterialModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class PrepModule { }
