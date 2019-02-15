import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {MaterialModule} from '../../app/material.module';
import {DashboardComponent} from './containers/dashboard/dashboard.component';

export const ROUTES: Routes = [{path: '', component: DashboardComponent}];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule, MaterialModule, ReactiveFormsModule,
    RouterModule.forChild(ROUTES)
  ],
})

export class DashboardModule {
}
