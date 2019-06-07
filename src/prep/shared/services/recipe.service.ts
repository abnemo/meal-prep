import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AuthService } from 'auth/shared/services/auth/auth.service';

export interface Recipe {
  name: string;
  ingredients: string[];
  instructions: string;
  $key: string;
}

@Injectable()
export class RecipeService {

  constructor(
    private authService: AuthService
  ) { }
}
