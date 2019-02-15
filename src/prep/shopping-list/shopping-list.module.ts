import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {MaterialModule} from '../../app/material.module';
import {ShoppingListComponent} from './containers/shopping-list/shopping-list.component';

export const ROUTES: Routes = [{path: '', component: ShoppingListComponent}];


@NgModule({
  declarations: [ShoppingListComponent],
  imports: [
    CommonModule, MaterialModule, ReactiveFormsModule,
    RouterModule.forChild(ROUTES)
  ],
})

export class ShoppingListModule {
}
