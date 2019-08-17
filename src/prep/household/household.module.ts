import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../../app/material.module';
import { HouseholdComponent } from 'prep/household/containers/household.component';

export const ROUTES: Routes = [{ path: '', component: HouseholdComponent }];

@NgModule({
  declarations: [HouseholdComponent],
  imports: [
    CommonModule, MaterialModule, ReactiveFormsModule,
    RouterModule.forChild(ROUTES), FlexLayoutModule
  ],
})

export class HouseholdModule {}
