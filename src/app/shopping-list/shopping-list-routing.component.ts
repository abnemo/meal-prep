import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingResolver } from './shopping-resolver.service';

export const routes: Routes = [{ path: '', component: ShoppingListComponent, resolve: { shoppingList: ShoppingResolver } }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingListRoutingModule {
  static components = [ShoppingListComponent]

}
