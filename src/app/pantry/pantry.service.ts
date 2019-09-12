import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Ingredient } from 'src/models/ingredient.model';

export interface PantryResponse {
  data: Ingredient[]
}

@Injectable({ providedIn: 'root' })
export class PantryService {
  pantry: any;

  constructor(private authHttp: HttpClient) { }

  getPantry(): Observable<Ingredient[]> {
    return this.authHttp.get<PantryResponse>(`${environment.API}/pantry`).pipe(
      map(res => res.data),
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
