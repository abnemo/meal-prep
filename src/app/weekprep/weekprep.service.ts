import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'
import { Observable, throwError } from 'rxjs';
import { APISuccessResponse } from '../core/models/responses.model';

@Injectable({ providedIn: 'root' })
export class WeekPrepService {

  constructor(
    private authHttp: HttpClient,
  ) { }

  generateShoppingList(ids: string[]): Observable<APISuccessResponse> {
    return this.authHttp.post<APISuccessResponse>(`${environment.API}/shopping`, ids)
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