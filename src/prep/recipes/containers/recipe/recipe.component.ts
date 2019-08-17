import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormArray, Validators, FormGroup } from '@angular/forms';
import {Recipe} from 'models/recipe.model'
import { HttpClient } from "@angular/common/http"
import { environment } from 'environments/environment'

@Component({
  selector: 'app-recipe',
  // templateUrl: './recipe.component.html',
  templateUrl: './recipe-test.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent {
  display= true;
  testRecipe: Recipe;
  id: string; 
  quantityTypeArray = ['grams', 'kg', 'ml', 'litre', 'packs', 'cans', 'pieces', 'grams'];

  recipeForm = this.fb.group(
    {
      title: ['', Validators.required],
      ingredients: this.fb.array([]),
      instructions: ['', Validators.required],
      link: ['']
    }
  );

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private activeRoute: ActivatedRoute,
    private authHttp: HttpClient
  ) {}

   ngOnInit() {
     this.activeRoute.params.subscribe(params => {
       this.id = params.id
       this.authHttp.get(`${ environment.API }/recipes/${params.id}`)
       .subscribe((res : any) =>{
        this.testRecipe = res.Data
        console.log('test', this.testRecipe)
        this.recipeForm.patchValue({
          title: this.testRecipe.title,
          instructions: this.testRecipe.instructions,
          link: this.testRecipe.links 
        })
        for (let ingredient of this.testRecipe.ingredients) {
          this.ingredients.push(this.fb.group({
            name: ingredient.name,
            quantity: ingredient.quantity,
            measurement: ingredient.measurement
          }))
        }
      })
     })
   }

  editable() {
    this.display = false
  }

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

  addIngredient() {
    this.ingredients.push(this.initIngredients());
  }

  deleteIngredient(i: number) {
    if (i > 0) {
      this.ingredients.removeAt(i);
    }
  }

  onEdit(form: Recipe) {
    console.log('form', form)
    const body = {
      form: form,
      id: this.id
    }
    this.authHttp.put(`${environment.API}/recipes/${this.id}`, body)
    .subscribe(res => console.log('res', res))
  }

  addRecipe(event: any) {
    console.log('Recipe', event);
    this.backToRecipes();
  }

  backToRecipes() {
    this.router.navigate(['recipes']);
  }
}
