import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'environments/environment';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface User {
  email: string | null;
  password: string;
  branch: string;
  authenticated: boolean;
}

@Injectable()
export class AuthService {
  token!: string | null;

  constructor(
    private http: HttpClient, private router: Router,
    private jwtHelper: JwtHelperService) { }

  login(login: any): Observable<boolean> {
    return this.http.post(`${environment.API}/account/login`, login)
      .pipe(map(this.handleToken), catchError(this.handleError));
  }

  register(registration: any): Observable<boolean> {
    return this.http
      .post(`${environment.API}/account/register`, registration)
      .pipe(map(this.handleToken), catchError(this.handleError));
  }

  logout(): void {
    this.token = null;
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  updateRole(): void {
    this.token = localStorage.getItem('token');
    if (this.token) {
      this.http.get(`${environment.API}/account/update`)
        .subscribe((res: any) => {
          if (res.token) this.handleToken(res);
        });
    }
  }

  loggedIn(): boolean {
    this.token = localStorage.getItem('token');
    return this.token != null && !this.jwtHelper.isTokenExpired(this.token);
  }

  payload(): any {
    const token = localStorage.getItem('token');
    return token ? this.jwtHelper.decodeToken(token) : 401;
  }

  private handleToken(res: Response | any) {
    const token = res && res['token'];
    if (token) {
      this.token = token;
      localStorage.setItem('token', token);
      return true;
    } else {
      return false;
    }
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
    return observableThrowError(errMsg);
  }
}
