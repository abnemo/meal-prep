import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { MaterialModule } from '../../app/material.module';
import { SharedModule } from 'prep/shared/shared.module';
import { RecipeListComponent } from './containers/recipe-list/recipe-list.component';
import { RecipeComponent } from './containers/recipe/recipe.component';

export const ROUTES: Routes = [
  { path: '', component: RecipeListComponent },
  { path: 'new', component: RecipeComponent }
];

@NgModule({
  declarations: [RecipeListComponent, RecipeComponent],
  imports: [
    CommonModule, MaterialModule, ReactiveFormsModule,
    RouterModule.forChild(ROUTES), SharedModule
  ],
})

export class RecipesModule {
}
