import { NgModule } from '@angular/core';
import { RegisterRoutingModule } from './register-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';


@NgModule({
  declarations: [RegisterRoutingModule.components],
  imports: [
    SharedModule,
    RegisterRoutingModule,
    ReactiveFormsModule,
  ]
})
export class RegisterModule { }
