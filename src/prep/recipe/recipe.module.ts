import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {MaterialModule} from '../../app/material.module';
import {RecipeComponent} from './containers/recipe/recipe.component';

export const ROUTES: Routes = [{path: '', component: RecipeComponent}];

@NgModule({
  declarations: [RecipeComponent],
  imports: [
    CommonModule, MaterialModule, ReactiveFormsModule,
    RouterModule.forChild(ROUTES)
  ],
})

export class RecipeModule {
}
