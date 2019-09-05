import { Component } from '@angular/core';
import { FormBuilder, FormArray, Validators } from '@angular/forms';
import { environment } from 'environments/environment'
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'recipe-form',
  templateUrl: 'recipe-form.component.html',
  styleUrls: ['recipe-form.component.scss']
})

export class RecipeFormComponent {
  quantityTypeArray = ['grams', 'kg', 'ml', 'litre', 'packs', 'cans', 'pieces'];
  recipeForm = this.fb.group(
    {
      title: ['', Validators.required],
      ingredients: this.fb.array([this.initIngredients()]),
      instructions: ['', Validators.required],
      link: ['']
    }
  );

  constructor(
    private fb: FormBuilder,
    private authHttp: HttpClient,
    ) {}

  initIngredients() {
    return this.fb.group({
      name: ['', Validators.required],
      quantity: ['', Validators.required],
      measurement: [''],
    });
  }

  get ingredients() {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  get requiredTitle() {
    return (
      this.recipeForm.get('title')!.hasError('required') &&
      this.recipeForm.get('title')!.touched
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
    this.authHttp.post(`${environment.API}/recipes`, form)
    .subscribe((res) => {
      console.log('res', res)
      // this.router.navigate([`/recipes/${res.data.id}`])
      })
  } 
}
