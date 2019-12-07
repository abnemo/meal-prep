import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IngredientDialogComponent } from './ingredient-dialog.component';
import { MatFormFieldModule, MatInputModule, MatDatepickerModule, MatCardModule, MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [IngredientDialogComponent],
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatButtonModule, MatCardModule, MatInputModule, MatDatepickerModule, FlexLayoutModule],
  exports: [IngredientDialogComponent],
  entryComponents: [IngredientDialogComponent]

})
export class IngredientDialogModule { }
