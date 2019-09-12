import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeekPrepComponent } from './weekprep.component';

export const routes: Routes = [{ path: '', component: WeekPrepComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeekPrepRoutingModule {
  static components = [WeekPrepComponent]

}
