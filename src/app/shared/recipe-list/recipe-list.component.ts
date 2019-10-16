import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/models/recipe.model';
import * as _ from 'lodash';

@Component({
  selector: 'mp-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  @Input() recipes: Recipe[];
  @Output() remove = new EventEmitter()
  @Output() selected = new EventEmitter()
  highlightColor: string;
  selectedRecipes = [];

  constructor() { }

  ngOnInit(): void { }

  removeRecipe(id: string) {
    this.remove.emit(id)
  }

  holding(event, index) {
    console.log(this.selectedRecipes)
    if (event === 500) {
      // this.recipes[index].selected = !this.recipes[index].selected
      // this.selectedRecipes = _.filter(this.recipes, 'selected')
      // this.selectedRecipes = _.reject(this.selectedRecipes, (elem) => {
      //   return elem['data']['id'] === this.recipes[index]['id'];
      // });
      // this.selectedRecipes.push({ data: this.recipes[index], selected: true });
      console.log(this.selectedRecipes)
      this.selected.emit(this.selectedRecipes)
    }
  }

  isAdded(id) {
    const ids = _.map(this.selectedRecipes, 'data.id');
    return ids.indexOf(id) !== -1;
  }
}
