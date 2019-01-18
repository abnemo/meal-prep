import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LogoutComponent } from './containers/logout/logout.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../../app/material.module';

export const ROUTES: Routes = [
  { path: '', component: LogoutComponent }
];

@NgModule({
  declarations: [
    LogoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedModule,
    MaterialModule
  ],
})

export class LogoutModule { }
