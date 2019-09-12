import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RecipesRoutingModule } from './recipes-routing.module';

@NgModule({
  declarations: [RecipesRoutingModule.components],
  imports: [SharedModule, RecipesRoutingModule]
})
export class RecipesModule { }
