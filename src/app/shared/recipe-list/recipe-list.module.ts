import { NgModule } from '@angular/core';
import { RecipeListComponent } from './recipe-list.component';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, MatCardModule, MatButtonModule, RouterModule],
  declarations: [RecipeListComponent],
  exports: [RecipeListComponent]
})
export class RecipeListModule { }