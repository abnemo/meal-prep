import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Ingredient } from 'src/models/ingredient.model';

export interface PantryResponse {
  data: Ingredient[]
}

@Injectable({ providedIn: 'root' })
export class PantryService {

  constructor(private authHttp: HttpClient) { }

  getPantry(): Observable<Ingredient[]> {
    return this.authHttp.get<PantryResponse>(`${environment.API}/pantry`).pipe(
      map(res => res.data),
      catchError(this.handleError)
    )
  }

  addIngredient(ingredient: Ingredient): Observable<Ingredient> {
    return this.authHttp.post<Ingredient>(`${environment.API}/pantry`, ingredient)
  }

  updateIngredient(ingredient: Ingredient): Observable<Ingredient> {
    console.log(ingredient)
    return this.authHttp.put<Ingredient>(`${environment.API}/pantry/${ingredient.id}`, ingredient)
      .pipe(
        map(() => ingredient),
        catchError(this.handleError)
      )
  }

  removeIngredient(id: string) {
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      id: id
    };
    return this.authHttp.post((`${environment.API}/pantry/delete`), options)
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
