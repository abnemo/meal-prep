import { NgModule } from '@angular/core';
import { RecipeListComponent } from './recipe-list.component';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatButtonModule, MatIconModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { HoldableDirective } from '../directives/holdable.directive';

@NgModule({
  imports: [CommonModule, MatCardModule, MatButtonModule, RouterModule, MatIconModule],
  declarations: [RecipeListComponent, HoldableDirective],
  exports: [RecipeListComponent]
})
export class RecipeListModule { }