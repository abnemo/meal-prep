import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes/recipes.service';
import { Recipe } from 'src/app/core/models/recipe.model';
import { WeekPrepService } from './weekprep.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weekprep',
  templateUrl: './weekprep.component.html',
  styleUrls: ['./weekprep.component.scss']
})
export class WeekPrepComponent implements OnInit {
  weekPrep: Recipe[]
  constructor(
    private recipeService: RecipesService,
    private weekPrepService: WeekPrepService,
    private router: Router
  ) { }

  ngOnInit() {
    this.recipeService.getWeekPrep().subscribe(res => this.weekPrep = res)
  }

  onSwipe(event, recipe) {
    this.weekPrep = this.weekPrep.filter(item => item.id !== recipe.id)
  }

  generateShoppingList() {
    const prepList = []
    for (let recipe of this.weekPrep) {
      prepList.push(recipe.id)
    }
    this.weekPrepService.generateShoppingList(prepList).subscribe(
      res => {
        if (res.success === true) this.router.navigate(['/shoppinglist'])
      }
    )
  }

}
