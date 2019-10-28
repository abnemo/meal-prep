import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RecipeCardComponent } from './recipe-card.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [CommonModule, MatCardModule, FlexLayoutModule, MatIconModule, RouterModule],
  exports: [RecipeCardComponent],
  declarations: [RecipeCardComponent]
})
export class RecipeCardModule { }