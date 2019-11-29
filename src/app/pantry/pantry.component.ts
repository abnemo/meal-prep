import { Component, OnInit } from '@angular/core';
import { PantryService } from './pantry.service';
import { Ingredient } from 'src/app/core/models/ingredient.model';

@Component({
  templateUrl: './pantry.component.html',
  styleUrls: ['./pantry.component.scss']
})
export class PantryComponent implements OnInit {
  pantry: Ingredient[];
  searchText: string;
  data = { location: 'pantry' }

  constructor(
    private pantryService: PantryService,
  ) { }

  ngOnInit() {
    this.pantryService.getPantry().subscribe((ingredients: Ingredient[]) => {
      this.pantry = ingredients
    })
  }

  getSearch(event: any) {
    this.searchText = event;
  }

  onAdd(item: Ingredient) {
    let existingIngredient = this.pantry
      .filter(ingredient =>
        ingredient.name === item.name &&
        ingredient.measurement === item.measurement
      )[0]
    if (existingIngredient) {
      existingIngredient.quantity = item.quantity
      this.pantryService.updateIngredient(existingIngredient)
        .subscribe()
    } else {
      this.pantryService.addIngredient(item)
        .subscribe((ingredient) => {
          this.pantry.push(ingredient)
        })
    }
  }

  onSwipe(event, ingredient: Ingredient) {
    this.pantryService.removeIngredient(ingredient.id).subscribe()
    this.pantry = this.pantry.filter(item => item.id !== ingredient.id)
  }

}