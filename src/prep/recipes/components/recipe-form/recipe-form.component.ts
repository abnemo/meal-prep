import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormArray, Validators } from '@angular/forms';

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
      instructions: ['', Validators.required],
      link: ['']
    }
  );

  constructor(private fb: FormBuilder) { }

  initIngredients() {
    return this.fb.group({
      ingredientName: ['', Validators.required],
      quantity: ['', Validators.required],
      type: [''],
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
    console.log('recipe form', form)

  } 
}
