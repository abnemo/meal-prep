import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { AppLayoutComponent } from './core/app-layout/app-layout.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import("src/app/login/login.module").then(m => m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import('src/app/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/household/household.module').then(m => m.HouseholdModule)
      },
      {
        path: 'pantry',
        loadChildren: () => import('src/app/pantry/pantry.module').then(m => m.PantryModule)
      },
      {
        path: 'recipes',
        loadChildren: () => import('src/app/recipes/recipes.module').then(m => m.RecipesModule)
      },
      {
        path: 'shoppinglist',
        loadChildren: () => import('src/app/shopping-list/shopping-list.module').then(m => m.ShoppingListModule)
      },
      {
        path: 'weekprep',
        loadChildren: () => import('src/app/weekprep/weekprep.module').then(m => m.WeekPrepModule)
      }
    ]
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
