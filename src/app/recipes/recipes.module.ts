import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RecipesRoutingModule } from './recipes-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RecipesRoutingModule.components],
  imports: [SharedModule, RecipesRoutingModule, ReactiveFormsModule]
})
export class RecipesModule { }
