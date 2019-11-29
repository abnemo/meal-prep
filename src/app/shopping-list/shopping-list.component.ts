import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/core/models/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  shoppingList: Ingredient[]
  data = { location: "pantry" }
  searchText: string;
  constructor(
    private shoppingService: ShoppingListService
  ) { }

  ngOnInit() {
    this.shoppingService.getShoppingList().subscribe(res => {
      this.shoppingList = res
    })
  }

  onAdd(item: Ingredient) {
    let existingIngredient = this.shoppingList
      .filter(ingredient =>
        ingredient.name === item.name &&
        ingredient.measurement === item.measurement
      )[0]
    if (existingIngredient) {
      console.log(JSON.stringify(existingIngredient, null, 2))
      existingIngredient.quantity += item.quantity
      this.shoppingService.updateIngredient(existingIngredient)
        .subscribe()
    } else {
      this.shoppingService.addIngredient(item)
        .subscribe((ingredient) => {
          this.shoppingList.push(ingredient)
        })
    }
  }

  getSearch(event: any) {
    this.searchText = event;
  }

}
