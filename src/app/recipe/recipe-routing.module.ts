import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeComponent } from './recipe.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';

// const routes: Routes = [
//   {
//     path: '',
//     component: RecipeComponent,
//     children: [
//       {
//         path: 'edit',
//         component: RecipeFormComponent,
//       },
//       {
//         path: 'details',
//         component: RecipeDetailsComponent
//       }
//     ]
//   },
// ];

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: RecipeComponent,
      },
      {
        path: 'details',
        component: RecipeDetailsComponent
      },
      {
        path: 'edit',
        component: RecipeFormComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule {
  static components = [RecipeComponent, RecipeDetailsComponent, RecipeFormComponent]
}