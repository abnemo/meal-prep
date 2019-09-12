import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ShoppingListRoutingModule } from './shopping-list-routing.component';

@NgModule({
  imports: [SharedModule, ShoppingListRoutingModule],
  declarations: [ShoppingListRoutingModule.components],
})
export class ShoppingListModule { }