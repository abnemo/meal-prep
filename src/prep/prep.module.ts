import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'auth/shared/guards/auth.guard';
import { LoginLayoutComponent } from 'app/components/layouts/login-layout/login-layout.component';

import { MaterialModule } from '../app/material.module';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  {
    path: '',
    component: LoginLayoutComponent
  },
  {
    path: 'recipe',
    canActivate: [AuthGuard],
    loadChildren: './recipe/recipe.module#RecipeModule'
  },
  {
    path: 'pantry',
    canActivate: [AuthGuard],
    loadChildren: './pantry/pantry.module#PantryModule'
  },
  {
    path: 'recipe-list',
    canActivate: [AuthGuard],
    loadChildren: './recipe-list/recipe-list.module#RecipeListModule'
  },
  {
    path: 'shopping-list',
    canActivate: [AuthGuard],
    loadChildren: './shopping-list/shopping-list.module#ShoppingListModule'
  },
  {
    path: 'week-prep',
    canActivate: [AuthGuard],
    loadChildren: './week-prep/week-prep.module#WeekPrepModule'
  }
];

@NgModule({
  imports: [MaterialModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PrepModule {
}
