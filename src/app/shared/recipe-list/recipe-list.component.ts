import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/models/recipe.model';

@Component({
  selector: 'mp-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  @Input() recipes: Recipe[];
  @Output() remove = new EventEmitter()
  eventText = '';
  selected;
  highlightColor: string;
  selectedRecipes = []

  constructor() { }

  ngOnInit(): void { }

  removeRecipe(id: string) {
    this.remove.emit(id)
  }

  holding(event) {
    console.log('event', event)
  }

  onPress(evt, index) {
    this.highlightColor = 'yellow'
    this.selectedRecipes.push(this.recipes[index])
    console.log('selected', this.selectedRecipes)
    console.log('something is happening', index)
    this.eventText += `(${evt.center.x}, ${evt.center.y})`;
  }

  onPressUp(evt, index) {
    console.log('maybe here?', evt, index)
  }

}
