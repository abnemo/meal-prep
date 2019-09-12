import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/models/recipe.model';

@Component({
  selector: 'mp-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Input() recipes: Recipe[];
  @Output() remove = new EventEmitter()
  constructor() { }

  removeRecipe(id: string) {
    this.remove.emit(id)
  }

  ngOnInit() { }

}
