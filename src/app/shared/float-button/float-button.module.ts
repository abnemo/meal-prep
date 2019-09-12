import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FloatButtonComponent } from './float-button.component';
import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [FloatButtonComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [FloatButtonComponent]
})
export class FloatButtonModule { }
