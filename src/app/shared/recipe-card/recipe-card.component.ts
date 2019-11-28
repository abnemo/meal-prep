import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/core/models/recipe.model';

@Component({
  selector: 'mp-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeCardComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() added = new EventEmitter<any>();
  constructor() { }

  ngOnInit() { }

  addMeal(recipe) {
    this.added.emit(recipe)
  }

}
