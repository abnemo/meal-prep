import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule, MatCardModule, MatDialogModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatProgressSpinnerModule, MatSidenavModule, MatTableModule, MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule, MatSidenavModule, MatToolbarModule, MatButtonModule,
    MatCardModule, MatInputModule, MatDialogModule, MatTableModule,
    MatMenuModule, MatIconModule, MatListModule, MatProgressSpinnerModule
  ],
  exports: [
    CommonModule, MatSidenavModule, MatToolbarModule, MatButtonModule,
    MatCardModule, MatInputModule, MatDialogModule, MatTableModule,
    MatMenuModule, MatIconModule, MatListModule, MatProgressSpinnerModule
  ],
})
export class MaterialModule {
}
