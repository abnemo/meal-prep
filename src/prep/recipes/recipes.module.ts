import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../../app/material.module';
import { SharedModule } from 'prep/shared/shared.module';

//components
import { RecipeListComponent } from './containers/recipe-list/recipe-list.component';
import { RecipeComponent } from './containers/recipe/recipe.component';
import { RecipeFormComponent } from 'prep/recipes/components/recipe-form/recipe-form.component';

export const ROUTES: Routes = [
  { path: '', component: RecipeListComponent },
  { path: 'new', component: RecipeComponent },
  { path: ':id', component: RecipeComponent }
];

@NgModule({
  declarations: [RecipeListComponent, RecipeComponent, RecipeFormComponent],
  imports: [
    CommonModule, MaterialModule, ReactiveFormsModule,
    RouterModule.forChild(ROUTES), SharedModule, FlexLayoutModule
  ],
})

export class RecipesModule {
}
