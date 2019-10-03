import { NgModule } from '@angular/core';
import { RecipeRoutingModule } from './recipe-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RecipeRoutingModule.components],
  imports: [SharedModule, RecipeRoutingModule, ReactiveFormsModule],
})
export class RecipeModule { }