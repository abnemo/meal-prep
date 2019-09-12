import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HouseholdComponent } from './household.component';

export const routes: Routes = [{ path: '', component: HouseholdComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HouseholdRoutingModule {
  static components = [HouseholdComponent]
}