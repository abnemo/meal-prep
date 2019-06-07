import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { HomeLayoutComponent } from 'app/components/layouts/home-layout/home-layout.component';
import { SidenavComponent } from 'app/components/navigation/sidenav/sidenav.component';
import { ToolbarComponent } from 'app/components/navigation/toolbar/toolbar.component';

// guards
import { AuthGuard } from 'auth/shared/guards/auth.guard';
// shared Modules
import { MaterialModule } from '../app/material.module';
import { SharedModule } from 'prep/shared/shared.module';

const routes: Routes = [
  {
    path: '', canActivate: [AuthGuard], component: HomeLayoutComponent,
    children: [
      {
        path: '',
        canActivate: [AuthGuard],
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      // {
      //   path: 'recipe',
      //   canActivate: [AuthGuard],
      //   loadChildren: './recipe/recipe.module#RecipeModule'
      // },
      {
        path: 'recipes',
        canActivate: [AuthGuard],
        loadChildren: './recipes/recipes.module#RecipesModule'
      },
      {
        path: 'pantry',
        canActivate: [AuthGuard],
        loadChildren: './pantry/pantry.module#PantryModule'
      },
      {
        path: 'shoppinglist',
        canActivate: [AuthGuard],
        loadChildren: './shopping-list/shopping-list.module#ShoppingListModule'
      },
      {
        path: 'weekprep',
        canActivate: [AuthGuard],
        loadChildren: './week-prep/week-prep.module#WeekPrepModule'
      }
    ]
  }
];

@NgModule({
  declarations: [HomeLayoutComponent, SidenavComponent, ToolbarComponent],
  imports: [MaterialModule, RouterModule.forRoot(routes), SharedModule.forRoot()],
  exports: [RouterModule]
})
export class PrepModule {
}
