import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/models/recipe.model';
import { RecipeService } from '../recipe.service';
import { FormBuilder, FormArray, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'mp-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})
export class RecipeFormComponent implements OnInit {
  recipe: Recipe;
  pageTitle: "Edit recipe";
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
  ) { }

  ngOnInit() {
  }

  initIngredients() {
    return this.fb.group({
      name: ['', Validators.required],
      quantity: ['', Validators.required],
      measurement: [''],
    });
  }
}
