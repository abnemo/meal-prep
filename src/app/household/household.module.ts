import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HouseholdRoutingModule } from './household-routing.module';

@NgModule({
  declarations: [HouseholdRoutingModule.components],
  imports: [SharedModule, HouseholdRoutingModule],
})
export class HouseholdModule { }
