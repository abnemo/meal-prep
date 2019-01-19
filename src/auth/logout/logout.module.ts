import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MaterialModule} from '../../app/material.module';
import {SharedModule} from '../shared/shared.module';

import {LogoutComponent} from './containers/logout/logout.component';

export const ROUTES: Routes = [{path: '', component: LogoutComponent}];

@NgModule({
  declarations: [LogoutComponent],
  imports: [
    CommonModule, RouterModule.forChild(ROUTES), SharedModule, MaterialModule
  ],
})

export class LogoutModule {
}
