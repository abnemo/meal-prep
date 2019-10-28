import { Component, OnInit } from '@angular/core';
import { PantryService } from './pantry.service';
import { Ingredient } from 'src/models/ingredient.model';

@Component({
  templateUrl: './pantry.component.html',
  styleUrls: ['./pantry.component.scss']
})
export class PantryComponent implements OnInit {
  pantry: Ingredient[];
  searchText: string;
  info: string = 'pantry'

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

  onAdd(event: Ingredient) {
    this.pantryService.addIngredient(event)
      .subscribe((res) => {
        const ingredient = res['data']
        this.pantry.push(ingredient)
      })
  }

  onSwipe(event, ingredient: Ingredient) {
    this.pantryService.removeIngredient(ingredient.id).subscribe()
    this.pantry = this.pantry.filter(item => item.id !== ingredient.id)
  }

}