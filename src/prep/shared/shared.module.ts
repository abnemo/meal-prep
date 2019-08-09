import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RecipeService } from 'prep/shared/services/recipe.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [],
  providers: [],
  bootstrap: []
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [RecipeService]
    };
  }
}
