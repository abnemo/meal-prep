import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from 'auth/register/containers/register/register.component';

import { MaterialModule } from '../../app/material.module';
import { SharedModule } from '../shared/shared.module';

export const ROUTES: Routes = [{ path: '', component: RegisterComponent }];

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule, RouterModule.forChild(ROUTES), SharedModule, MaterialModule,
    ReactiveFormsModule, LayoutModule, FlexLayoutModule
  ],
})

export class RegisterModule {
}
