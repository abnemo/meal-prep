import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment'
import { catchError, map } from 'rxjs/operators';
import { throwError, Observable, of } from 'rxjs';
import { Recipe } from 'src/app/core/models/recipe.model';
import { APISuccessResponse } from '../core/models/responses.model';

@Injectable({ providedIn: 'root' })
export class RecipesService {

  constructor(
    private authHttp: HttpClient,
  ) { }

  getRecipeList(): Observable<Recipe[]> {
    return this.authHttp.get<Recipe[]>(`${environment.API}/recipes`).pipe(
      map((res: any) => res.data),
      catchError(this.handleError)
    )
  }

  getWeekPrep(): Observable<Recipe[]> {
    return this.authHttp.get<Recipe[]>(`${environment.API}/recipes?filter=inPrep`).pipe(
      map((res: any) => res.data),
      catchError(this.handleError)
    )
  }

  getRecipe(id: string): Observable<Recipe> {
    if (id === '0') return of(this.initializeRecipe())

    return this.authHttp.get<Recipe>(`${environment.API}/recipes/${id}`)
      .pipe(
        map((response: any) => response.data),
        catchError(this.handleError)
      )
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

  addRecipe(data: Recipe): Observable<Recipe> {
    return this.authHttp.post<Recipe>(`${environment.API}/recipes`, data)
      .pipe(
        catchError(this.handleError)
      )
  }

  updateRecipe(recipe: Recipe): Observable<Recipe> {
    return this.authHttp.put<Recipe>(`${environment.API}/recipes/${recipe.id}`, recipe)
      .pipe(
        map(() => recipe),
        catchError(this.handleError)
      )
  }

  removeRecipe(id: string): Observable<APISuccessResponse> {
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      id: id
    };
    return this.authHttp.post<APISuccessResponse>((`${environment.API}/recipes/delete`), options)
      .pipe(
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
}
