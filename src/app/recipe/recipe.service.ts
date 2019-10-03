import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'
import { catchError, mergeMap, map, tap } from 'rxjs/operators';
import { throwError, Observable, of } from 'rxjs';
import { Recipe } from 'src/models/recipe.model';

@Injectable({ providedIn: 'root' })
export class RecipeService {

  constructor(
    private authHttp: HttpClient,
  ) { }

  getRecipe(id: string): Observable<Recipe> {
    if (id === '0') {
      return of(this.initializeRecipe())
    }
    return this.authHttp.get<Recipe>(`${environment.API}/recipes/${id}`)
      .pipe(
        map((response: any) => response.data),
        catchError(this.handleError)
      )
  }

  private handleError(error: Response | any) {
    let errMsg: any;
    if (error instanceof Response) {
      errMsg = { status: error.status, msg: error };
    } else {
      errMsg = {
        status: 500,
        msg: error.message ? error.message : error.toString()
      };
    }
    return throwError(errMsg);
  }

  initializeRecipe(): Recipe {
    return {
      id: '0',
      dateCreated: null,
      title: null,
      ingredients: [],
      instructions: null,
      links: null
    }

  }
}

