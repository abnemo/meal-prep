import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MaterialModule } from '../../app/material.module';
import { SharedModule } from '../shared/shared.module';

import { RegisterComponent } from './containers/register/register.component';

export const ROUTES: Routes = [
  { path: '', component: RegisterComponent }
];

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule, RouterModule.forChild(ROUTES), SharedModule, MaterialModule
  ],
})

export class RegisterModule {
}
