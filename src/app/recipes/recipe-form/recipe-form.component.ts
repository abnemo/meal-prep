import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/models/recipe.model';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { mergeMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { RecipesService } from '../recipes.service';
import { Ingredient } from 'src/models/ingredient.model';

@Component({
  selector: 'mp-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})
export class RecipeFormComponent implements OnInit {
  @Input() recipe: Recipe;
  pageTitle: string;
  errorMessage: string;
  private sub: Subscription
  recipeForm = this.fb.group(
    {
      title: ['', Validators.required],
      ingredients: this.fb.array([this.initIngredients()]),
      instructions: ['', Validators.required],
      links: ['']
    }
  );

  constructor(
    private fb: FormBuilder,
    private recipesService: RecipesService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.sub = this.activeRoute.params
      .pipe(
        mergeMap(params => this.recipesService.getRecipe(params.id))
      )
      .subscribe((val) => {
        this.recipe = val
        if (val.id === '0') {
          this.pageTitle = 'New recipe'
        } else {
          this.pageTitle = 'Edit recipe'
          this.fillForm(val)
        }
      })
  }

  initIngredients() {
    return this.fb.group({
      name: ['', Validators.required],
      quantity: ['', Validators.required],
      measurement: ['', Validators.required],
    });
  }

  get ingredients(): FormArray {
    return <FormArray>this.recipeForm.get('ingredients');
  }

  addIngredient(): void {
    this.ingredients.push(this.initIngredients());
  }

  deleteIngredient(i: number) {
    this.ingredients.removeAt(i);
  }

  fillForm(data: Recipe) {
    this.recipeForm.patchValue({
      title: data.title,
      instructions: data.instructions,
      links: data.links,
    })
    this.recipeForm.setControl('ingredients', this.setExistingIngredients(data.ingredients))
  }

  setExistingIngredients(ingredients: Ingredient[]): FormArray {
    const formArray = new FormArray([])
    ingredients.forEach(elem => {
      formArray.push(
        this.fb.group({
          name: elem.ingredient.name,
          quantity: elem.ingredient.quantity,
          measurement: elem.ingredient.measurement
        })
      )
    });
    return formArray
  }

  onSubmit(form: any) {
    form.links = [{ url: form.links }]
    if (this.recipeForm.valid) {
      if (this.recipeForm.dirty) {
        const recipe = { ...this.recipe, ...form }
        console.log('recipe', recipe)
        if (recipe.id === '0') {
          console.log('creating new!')
          this.recipesService.addRecipe(recipe)
            .subscribe({
              next: () => this.onSaveComplete(),
              error: err => this.errorMessage = err
            });
        } else {
          console.log('updating recipe')
          this.recipesService.updateRecipe(recipe)
            .subscribe({
              next: () => this.onSaveComplete(),
              error: err => this.errorMessage = err
            });
        }
      } else {
        this.onSaveComplete();
      }
    } else {
      this.errorMessage = 'Please correct the validation errors.';
    }
  }

  onSaveComplete(): void {
    // Reset the form to clear the flags
    this.recipeForm.reset();
    this.router.navigate(['/recipes']);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
}
