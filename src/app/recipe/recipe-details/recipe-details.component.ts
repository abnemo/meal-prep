import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/models/recipe.model';

@Component({
  selector: 'mp-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {

  @Input() recipe: Recipe;
  constructor() { }

  ngOnInit() { }

}
