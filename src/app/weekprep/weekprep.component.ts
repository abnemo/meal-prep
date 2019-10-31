import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes/recipes.service';
import { Recipe } from 'src/models/recipe.model';

@Component({
  selector: 'app-weekprep',
  templateUrl: './weekprep.component.html',
  styleUrls: ['./weekprep.component.scss']
})
export class WeekPrepComponent implements OnInit {
  weekPrep: Recipe[]
  info: string = "recipes"
  constructor(
    private recipeService: RecipesService
  ) { }

  ngOnInit() {
    this.recipeService.getWeekPrep().subscribe(res => this.weekPrep = res)
  }

  onSwipe(event, recipe) {
    console.log('recipe', recipe)
    this.weekPrep = this.weekPrep.filter(item => item.id !== recipe.id)
  }

  generateShoppingList() {
    console.log('generating')
  }

}
