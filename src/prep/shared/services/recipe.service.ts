import { Injectable } from '@angular/core';
import { AuthService } from 'auth/shared/services/auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable()
export class RecipeService {

  constructor(
    private authService: AuthService,
    private authHttp: HttpClient
  ) { }

  createRecipe(form: any) {
    console.log('recipe service', `${environment.API}/v1/recipes/new`)
    return this.authHttp.post(`${environment.API}/v1/recipes/new`, form)
  }
}
