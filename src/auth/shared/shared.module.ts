import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {MaterialModule} from '../../app/material.module';

// conponents
import {AuthFormComponent} from './components/auth-form/auth-form.component';
// guards
import {AuthGuard} from './guards/auth.guard';
// services
import {AuthService} from './services/auth/auth.service';

@NgModule({
  declarations: [AuthFormComponent],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  exports: [AuthFormComponent]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {ngModule: SharedModule, providers: [AuthService, AuthGuard]};
  }
}
