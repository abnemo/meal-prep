import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import {MaterialModule} from '../../app/material.module';
import {PantryComponent} from './containers/pantry/pantry.component';
import { SharedModule } from 'prep/shared/shared.module';

export const ROUTES: Routes = [{path: '', component: PantryComponent}];

@NgModule({
  declarations: [PantryComponent],
  imports: [
    CommonModule, MaterialModule, SharedModule, ReactiveFormsModule,
    RouterModule.forChild(ROUTES), FlexLayoutModule
  ],
})

export class PantryModule {}
