import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ingredient } from 'src/models/ingredient.model';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  constructor(
    private authHttp: HttpClient,
  ) { }

  getShoppingList(): Observable<Ingredient[]> {
    return this.authHttp.get(`${environment.API}/shopping`).pipe(
      map(res => res['data']),
      catchError(this.handleError)
    )
  }

  addIngredient(ingredient: Ingredient): Observable<Ingredient> {
    return this.authHttp.post<Ingredient>(`${environment.API}/shopping/add`, ingredient)
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
