import { Injectable } from '@angular/core';
import { Ingredient } from 'src/models/ingredient.model';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ShoppingListService } from './shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingResolver implements Resolve<Ingredient[]> {
  constructor(
    private shoppingService: ShoppingListService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Ingredient[]> {
    return this.shoppingService.getShoppingList()
  }
}
