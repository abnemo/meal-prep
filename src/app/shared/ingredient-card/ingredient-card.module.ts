import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IngredientCardComponent } from './ingredient-card.component';
import { MatCardModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  imports: [CommonModule, FormsModule, MatCardModule, FlexLayoutModule, MatIconModule],
  exports: [IngredientCardComponent],
  declarations: [IngredientCardComponent]
})
export class IngredientCardModule { }