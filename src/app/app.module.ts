import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { AppComponent } from './containers/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PagesModule } from '../prep/prep.module';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatIconModule, MatListModule } from '@angular/material';
import { DerpComponent } from './derp/derp.component';

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    DerpComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PagesModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    LayoutModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//   var config = {
//     apiKey: "AIzaSyCqMj1g3F1l9RzzwdWoOPUbdbPmFEocItw",
//     authDomain: "mealprep-e6a11.firebaseapp.com",
//     databaseURL: "https://mealprep-e6a11.firebaseio.com",
//     projectId: "mealprep-e6a11",
//     storageBucket: "mealprep-e6a11.appspot.com",
//     messagingSenderId: "761855951143"
//   };
