import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {MaterialModule} from '../../app/material.module';
import {WeekPrepComponent} from './containers/week-prep/week-prep.component';

export const ROUTES: Routes = [{path: '', component: WeekPrepComponent}];

@NgModule({
  declarations: [WeekPrepComponent],
  imports: [
    CommonModule, MaterialModule, ReactiveFormsModule,
    RouterModule.forChild(ROUTES)
  ],
})

export class WeekPrepModule {
}
