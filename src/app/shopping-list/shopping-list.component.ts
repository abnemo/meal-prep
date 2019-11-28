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
      console.log(res)
      this.shoppingList = res
    })
  }

  onAdd(event: Ingredient) {
    this.shoppingService.addIngredient(event)
      .subscribe((res) => {
        const ingredient = res['data']
        this.shoppingList.push(ingredient)
      })
  }

  getSearch(event: any) {
    this.searchText = event;
  }

}
