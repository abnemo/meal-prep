import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormArray, Validators } from '@angular/forms';
import { Recipe } from 'prep/shared/services/recipe.service';

@Component({
  selector: 'recipe-form',
  templateUrl: 'recipe-form.component.html',
  styleUrls: ['recipe-form.component.scss']
})

export class RecipeFormComponent {
  quantityTypeArray = ['grams', 'kg', 'ml', 'litre', 'packs', 'cans', 'pieces'];
  recipeForm = this.fb.group(
    {
      recipeTitle: ['', Validators.required],
      ingredients: this.fb.array([this.initIngredients()]),
      instructions: ['', Validators.required]
    }
  );

  @Output()
  create = new EventEmitter<Recipe>();

  constructor(private fb: FormBuilder) { }

  initIngredients() {
    return this.fb.group({
      ingredientName: ['', Validators.required],
      quantity: ['', Validators.required],
      quantType: [''],
    });
  }

  get ingredients() {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  get requiredTitle() {
    return (
      this.recipeForm.get('recipeTitle')!.hasError('required') &&
      this.recipeForm.get('recipeTitle')!.touched
    );
  }

  addIngredient() {
    this.ingredients.push(this.initIngredients());
  }


  deleteIngredient(i: number) {
    if (i > 0) {
      this.ingredients.removeAt(i);
    }
  }

  onSubmit(form: any) {
    this.create.emit(form);
  }
}
