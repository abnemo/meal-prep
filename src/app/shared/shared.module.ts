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
import { HoldableDirective } from './directives/holdable.directive';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RouterModule } from '@angular/router';
import { IngredientCardModule } from './ingredient-card/ingredient-card.module';
import { SwipeModule } from './swipe/swipe.module';
import { RecipeCardModule } from './recipe-card/recipe-card.module';

const MaterialModules = [MatSidenavModule, MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule, MatDialogModule, MatTableModule, MatMenuModule, MatIconModule, MatListModule,
  MatProgressSpinnerModule, MatOptionModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule]

@NgModule({
  declarations: [FilterPipe, HoldableDirective, RecipeListComponent],
  imports: [CommonModule, FlexLayoutModule, RouterModule, MaterialModules,
    FilterTextboxModule, FloatButtonModule, IngredientDialogModule, IngredientCardModule, RecipeCardModule, SwipeModule],
  exports: [CommonModule, MaterialModules, FlexLayoutModule, RouterModule, HoldableDirective, RecipeListComponent,
    FilterTextboxModule, FilterPipe, FloatButtonModule, IngredientDialogModule, IngredientCardModule, RecipeCardModule, SwipeModule],
})
export class SharedModule { }