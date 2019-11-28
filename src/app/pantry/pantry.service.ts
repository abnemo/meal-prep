import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Ingredient } from 'src/app/core/models/ingredient.model';
import { APISuccessResponse } from 'src/app/core/models/responses.model';

interface PantryResponse {
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
      .pipe(
        catchError(this.handleError)
      )
  }

  updateIngredient(ingredient: Ingredient): Observable<Ingredient> {
    return this.authHttp.put<Ingredient>(`${environment.API}/pantry/${ingredient.id}`, ingredient)
      .pipe(
        map(() => ingredient),
        catchError(this.handleError)
      )
  }

  removeIngredient(id: string): Observable<APISuccessResponse> {
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      id: id
    };
    return this.authHttp.post<APISuccessResponse>((`${environment.API}/pantry/delete`), options)
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
