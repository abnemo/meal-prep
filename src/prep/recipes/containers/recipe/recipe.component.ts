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
      links: ['']
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
        console.log('testRecipe', this.testRecipe)
        this.recipeForm.patchValue({
          title: this.testRecipe.title,
          instructions: this.testRecipe.instructions,
          links: this.testRecipe.links 
        })
        for (let elem of this.testRecipe.ingredients) {
          this.ingredients.push(this.fb.group({
            name: elem.ingredient.name,
            quantity: elem.quantity,
            measurement: elem.ingredient.measurement
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
    const body = {
      form: {
        title: form.title,
        ingredients: form.ingredients,
        instructions: form.instructions,
        links: [{url: form.links}]
      },
      id: this.id
    }
    console.log('body', body)
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
