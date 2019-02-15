import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {MaterialModule} from '../../app/material.module';
import {RecipeListComponent} from './containers/recipe-list/recipe-list.component';

export const ROUTES: Routes = [{path: '', component: RecipeListComponent}];


@NgModule({
  declarations: [RecipeListComponent],
  imports: [
    CommonModule, MaterialModule, RouterModule.forChild(ROUTES),
    ReactiveFormsModule
  ]
})

export class RecipeListModule {
}
