import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoginLayoutComponent } from 'app/components/layouts/login-layout/login-layout.component';
import { LoginComponent } from 'auth/login/containers/login/login.component';

import { MaterialModule } from '../../app/material.module';
import { SharedModule } from '../shared/shared.module';

export const ROUTES: Routes = [
  {
    path: '',
    component: LoginLayoutComponent,
    children: [{ path: '', component: LoginComponent }],
  },
];

@NgModule({
  declarations: [LoginComponent, LoginLayoutComponent],
  imports: [
    CommonModule, RouterModule.forChild(ROUTES), SharedModule, MaterialModule,
    ReactiveFormsModule, LayoutModule, FlexLayoutModule
  ],
})

export class LoginModule {
}
