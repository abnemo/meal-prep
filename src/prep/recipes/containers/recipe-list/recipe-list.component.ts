import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { environment } from 'environments/environment'
import { Recipe } from 'models/recipe.model'
import { Router } from '@angular/router';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})

export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(
    private authHttp: HttpClient,
    private router: Router,
  ) { }

  ngOnInit() {
    this.authHttp.get(`${environment.API }/recipes`)
    .subscribe((res: any) => {
      this.recipes = res['Data']
      })
  } 

  goToRecipe(id: string) {
    this.router.navigate([`/recipes/${id}`])
  }

  removeRecipe(id: string) {
    console.log('removing', id);
    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      id: id 
    };
    this.authHttp.post((`${environment.API}/recipes/delete/`), options)
  }
}
