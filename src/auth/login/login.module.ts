import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MaterialModule} from '../../app/material.module';
import {SharedModule} from '../shared/shared.module';

import {LoginComponent} from './containers/login/login.component';

export const ROUTES: Routes = [{path: '', component: LoginComponent}];

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule, RouterModule.forChild(ROUTES), SharedModule, MaterialModule
  ],
})

export class LoginModule {
}
