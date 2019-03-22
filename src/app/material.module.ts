import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatDialogModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatProgressSpinnerModule, MatSidenavModule, MatTableModule, MatToolbarModule, MatOptionModule, MatSelectModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule, MatSidenavModule, MatToolbarModule, MatButtonModule,
    MatCardModule, MatInputModule, MatDialogModule, MatTableModule,
    MatMenuModule, MatIconModule, MatListModule, MatProgressSpinnerModule, MatOptionModule, MatSelectModule
  ],
  exports: [
    CommonModule, MatSidenavModule, MatToolbarModule, MatButtonModule,
    MatCardModule, MatInputModule, MatDialogModule, MatTableModule,
    MatMenuModule, MatIconModule, MatListModule, MatProgressSpinnerModule, MatOptionModule, MatSelectModule
  ],
})
export class MaterialModule {
}
