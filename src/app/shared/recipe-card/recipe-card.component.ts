import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Recipe } from 'src/models/recipe.model';

@Component({
  selector: 'mp-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeCardComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor() { }

  ngOnInit() { }

}
