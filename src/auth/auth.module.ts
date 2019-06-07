import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// third party modules
import { JwtModule } from '@auth0/angular-jwt';
import { MaterialModule } from '../app/material.module';

// shared modules
import { SharedModule } from './shared/shared.module';

export const ROUTES: Routes = [
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterModule' },
];

export function jwtTokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(ROUTES), SharedModule.forRoot(),
    MaterialModule, JwtModule.forRoot({
      config: {
        tokenGetter: jwtTokenGetter,
        whitelistedDomains:
          ['localhost:8080', 'plus.experiments.explabs.io']
      }
    })
  ],
})

export class AuthModule {
}