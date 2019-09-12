import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment'
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RecipesService {

  constructor(
    private authHttp: HttpClient
  ) { }

  getRecipeList() {
    return this.authHttp.get(`${environment.API}/recipes`).pipe(
      map((res: any) => res.data),
      catchError(this.handleError)
    )
  }

  removeRecipe(id: string) {
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      id: id
    };
    this.authHttp.post((`${environment.API}/recipes/delete/`), options)
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

