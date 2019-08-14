import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RecipeService } from 'prep/shared/services/recipe.service';
import { IngredientDialogComponent } from './ingredient-dialog/ingredient-dialog.component';

@NgModule({
  declarations: [IngredientDialogComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  entryComponents: [IngredientDialogComponent]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [RecipeService]
    };
  }
}
