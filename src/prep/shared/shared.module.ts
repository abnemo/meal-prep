import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'app/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { RecipeService } from 'prep/shared/services/recipe.service';
import { IngredientDialogComponent } from './ingredient-dialog/ingredient-dialog.component';
import { FloatButtonComponent } from 'prep/shared/float-button/float-button.component';
import { SearchComponent } from './search-component/search-component.component'
import { FilterPipe} from './pipes/filterPipe.pipe'

@NgModule({
  declarations: [IngredientDialogComponent, FloatButtonComponent, SearchComponent, FilterPipe],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule
  ],
  exports: [FloatButtonComponent, SearchComponent, FilterPipe],
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
