import { NgModule } from '@angular/core';
import { WeekPrepRoutingModule } from './weekprep-routing.model';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [WeekPrepRoutingModule.components],
  imports: [SharedModule, WeekPrepRoutingModule]
})
export class WeekPrepModule { }
