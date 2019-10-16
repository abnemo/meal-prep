import { NgModule } from '@angular/core';
import { PantryRoutingModule } from './pantry-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PantryRoutingModule.components],
  imports: [SharedModule, PantryRoutingModule],
})
export class PantryModule { }
