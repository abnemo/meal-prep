import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './containers/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../../app/material.module';

export const ROUTES: Routes = [
  { path: '', component: LoginComponent }
];

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedModule,
    MaterialModule
  ],
})

export class LoginModule { }
