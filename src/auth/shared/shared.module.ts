import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
// services
import { AuthService } from 'auth/shared/services/auth/auth.service';

import { MaterialModule } from '../../app/material.module';

// guards
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: SharedModule, providers: [AuthService, AuthGuard] };
  }
}
