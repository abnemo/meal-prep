import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormArray, FormGroup, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { mergeMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { RecipesService } from '../recipes.service';
import { Recipe } from 'src/app/core/models/recipe.model';
import { Ingredient } from 'src/app/core/models/ingredient.model';
import { integerValidator } from '../../shared/validators/checkInteger.validator'

enum Fields {
  TITLE = 'title',
  INGREDIENTS = 'ingredients',
  INSTRUCTIONS = 'instructions',
}

type Errors = {
  [key in Fields]: string;
};

@Component({
  selector: 'mp-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})
export class RecipeFormComponent implements OnInit {
  @Input() recipe: Recipe;
  pageTitle: string;
  recipeForm: FormGroup;
  private sub: Subscription;
  private validationMessages = {
    title: {
      required: 'Title is required.',
    },
    ingredients: {
      required: 'Ingredient is required.',
    },
    instructions: {
      required: 'Instructions are required.'
    }
  };

  error: Errors = {
    title: '',
    ingredients: '',
    instructions: '',
  };

  constructor(
    private fb: FormBuilder,
    private recipesService: RecipesService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.recipeForm = this.fb.group(
      {
        title: ['', Validators.required],
        ingredients: this.fb.array([this.initIngredients()]),
        instructions: ['', Validators.required],
        links: ['']
      }, {
      validators: (c: AbstractControl) => {
        if (c.value.ingredients.length === 0) {
          return { ingredients: true };
        }
        return null;
      }
    })

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

    const titleControl = this.recipeForm.get('title');
    titleControl.valueChanges.subscribe(() => this.notify(titleControl, Fields.TITLE));

    const ingredientsControl = this.recipeForm.get('ingredients');
    ingredientsControl.valueChanges.subscribe(() => {
      this.notify(ingredientsControl, Fields.INGREDIENTS)
    });

    const instructionsControl = this.recipeForm.get('instructions');
    instructionsControl.valueChanges.subscribe(() => this.notify(instructionsControl, Fields.INSTRUCTIONS));

    this.recipeForm.get('ingredients').setValidators([Validators.required, Validators.minLength(1)]);
    this.recipeForm.get('ingredients').updateValueAndValidity();
  }

  initIngredients() {
    return this.fb.group({
      name: ['', Validators.required],
      quantity: [null, [Validators.required, integerValidator]],
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
          name: elem.name,
          quantity: elem.quantity,
          measurement: elem.measurement
        })
      )
    });
    return formArray
  }

  onSubmit(form: any) {
    if (this.recipeForm.valid) {
      if (this.recipeForm.dirty) {
        const recipe = { ...this.recipe, ...form }
        if (recipe.id === '0') {
          this.recipesService.addRecipe(recipe)
            .subscribe({
              next: () => this.onSaveComplete(),
            });
        } else {
          this.recipesService.updateRecipe(recipe)
            .subscribe(() => this.onSaveComplete());
        }
      } else {
        this.onSaveComplete();
      }
    }
  }

  onSaveComplete(): void {
    // Reset the form to clear the flags
    this.recipeForm.reset();
    this.router.navigate(['/recipes']);
  }

  notify(c: AbstractControl, field: string): void {
    this.error[field] = '';
    if (c.errors && c.status === 'INVALID') {
      this.error[field] = Object.keys(c.errors)
        .map(key => this.validationMessages[field][key]);
    }
    if ((c.touched || c.dirty) && c.errors) {
      this.error[field] = Object.keys(c.errors)
        .map(key => this.validationMessages[field][key]);
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
}
