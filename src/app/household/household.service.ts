import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { User } from 'src/models/user.model';
import { Observable, throwError, of } from 'rxjs';

export interface HouseholdResponse {
  id: string;
  name: string;
  users: User[];
}

@Injectable({ providedIn: 'root' })
export class HouseholdService {

  constructor(private authHttp: HttpClient) { }

  getHousehold(): Observable<HouseholdResponse> {
    return this.authHttp.get<HouseholdResponse>(`${environment.API}/household`).pipe(
      catchError(this.handleError)
    )
  }

  removeUser(id: string): Observable<boolean> {
    console.log('Stop trying to remove yourself! :D')
    return of(false)
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

