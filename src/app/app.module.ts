import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes } from '@angular/router';
import { environment } from 'environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';

// feature
import { AuthModule } from 'auth/auth.module';
import { PrepModule } from 'prep/prep.module';
import { Store } from 'store';

import { AppComponent } from './containers/app.component';
import { MaterialModule } from './material.module';

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full' },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, BrowserAnimationsModule, PrepModule, HttpClientModule,
    ServiceWorkerModule.register(
      'ngsw-worker.js', { enabled: environment.production }),
    LayoutModule, AuthModule, MaterialModule
  ],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule {
}
