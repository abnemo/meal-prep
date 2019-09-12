import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PantryComponent } from './pantry.component';

export const routes: Routes = [{ path: '', component: PantryComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PantryRoutingModule {
  static components = [PantryComponent]

}
