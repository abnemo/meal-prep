import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class WeekPrepService {

  constructor(
    private authHttp: HttpClient,
    private router: Router,
  ) { }

  generateShoppingList(list) {
    console.log('list', list)
    return this.authHttp.post(`${environment.API}/shopping`, list).subscribe(
      res => {
        if (res['success'] === true) {
          this.router.navigate(['/shoppinglist'])
        }
      })
  }
}