import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormArray, Validators } from '@angular/forms';
import {Recipe} from 'models/recipe.model'
@Component({
  selector: 'app-recipe',
  // templateUrl: './recipe.component.html',
  templateUrl: './recipe-test.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent {
  display= true;
  testRecipe: Recipe = {
    id: "1",
    dateCreated: Date.now(),
    title: "Cheeseburger",
    ingredients: [ 
      {name: 'burger bun', quantity: 6, type: "pieces"},
      {name: 'groundbeef', quantity: 2, type: 'kg'},
      {name: ' cheese', quantity: 12, type: 'pieces'},
      {name: 'onion powder', quantity: 100, type: "grams"}
      ],
    instructions: `In a large bowl, mix ground beef, onion powder, salt and pepper until just combined. Do not overmix, or your patties will be tough. 
Divide into six portions and form patties, without pressing too hard. They should be uniform in thickness. Smooth out any cracks using your fingers. Make these right before you grill them, so they stay at room temperature. 
Preheat your grill, grill pan or cast-iron skillet to high heat and add burger patties. If using a grill, cover with the lid.
Cook until the crust that forms on the bottom of the burger releases it from the pan or grate — about 2 minutes. Gently test, but don't flip it until it gets to this point. When burgers lift up easily, flip, add two slices of cheese to each, close lid if using a grill, and cook on the other side for another 2-3 minutes for medium to medium rare. 
Remove burgers with a sturdy metal spatula and transfer to a plate. Allow to rest for several minutes, then transfer to buns.
Garnish as desired and serve immediately. `,
    links: 'www.youtube.com'
    }

  quantityTypeArray = ['grams', 'kg', 'ml', 'litre', 'packs', 'cans', 'pieces'];

  recipeForm = this.fb.group(
    {
      recipeTitle: ['', Validators.required],
      ingredients: this.fb.array([this.initIngredients()]),
      instructions: ['', Validators.required],
      link: ['']
    }
  );

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) {
    // this.recipeForm.disable()
   }

   ngOnInit() {
     this.recipeForm.patchValue({
       recipeTitle: this.testRecipe.title,
       instructions: this.testRecipe.instructions,
       link: this.testRecipe.links 
     })

     this.recipeForm.patchValue({
       ingredients: this.testRecipe.ingredients.forEach((item) =>
         this.ingredients.push(this.fb.group(item))),
     })
   }

  editable() {
    console.log('testing')
    this.display = false
    // this.recipeForm.enable()
  }

  initIngredients() {
    return this.fb.group({
      name: ['', Validators.required],
      quantity: ['', Validators.required],
      type: [''],
    });
  }

  get ingredients() {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  addIngredient() {
    this.ingredients.push(this.initIngredients());
  }

  deleteIngredient(i: number) {
    if (i > 0) {
      this.ingredients.removeAt(i);
    }
  }

  addRecipe(event: any) {
    console.log('Recipe', event);
    this.backToRecipes();
  }

  backToRecipes() {
    this.router.navigate(['recipes']);
  }
}
