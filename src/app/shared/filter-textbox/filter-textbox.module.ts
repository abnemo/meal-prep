import { NgModule } from '@angular/core';
import { FilterTextboxComponent } from './filter-textbox.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [CommonModule, FormsModule, FlexLayoutModule, MatFormFieldModule, MatIconModule, MatInputModule],
  declarations: [FilterTextboxComponent],
  exports: [FilterTextboxComponent]
})
export class FilterTextboxModule { }