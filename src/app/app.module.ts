import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
// feature
import { AuthModule } from 'auth/auth.module';
import { PrepModule } from 'prep/prep.module';

import { AppComponent } from './containers/app.component';
import { MaterialModule } from './material.module';

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', component: AppComponent },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AuthModule,
    PrepModule,
    MaterialModule,
    RouterModule.forRoot(ROUTES),
    FlexLayoutModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
