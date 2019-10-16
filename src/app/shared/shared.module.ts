import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatProgressSpinnerModule, MatSidenavModule,
  MatTableModule, MatToolbarModule, MatOptionModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule
} from '@angular/material';
import { FilterTextboxModule } from './filter-textbox/filter-textbox.module';
import { FilterPipe } from './pipes/filter.pipe';
import { FloatButtonModule } from './float-button/float-button.module';
import { IngredientDialogModule } from './ingredient-dialog/ingredient-dialog.module';
import { RecipeListModule } from './recipe-list/recipe-list.module';
import { HoldableDirective } from './directives/holdable.directive';

const MaterialModules = [MatSidenavModule, MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule, MatDialogModule, MatTableModule, MatMenuModule, MatIconModule, MatListModule,
  MatProgressSpinnerModule, MatOptionModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule]

@NgModule({
  declarations: [FilterPipe],
  imports: [CommonModule, FlexLayoutModule, MaterialModules,
    FilterTextboxModule, FloatButtonModule, IngredientDialogModule, RecipeListModule],
  exports: [CommonModule, MaterialModules, FlexLayoutModule,
    FilterTextboxModule, FilterPipe, FloatButtonModule, IngredientDialogModule, RecipeListModule],
})
export class SharedModule { }