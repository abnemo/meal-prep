import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { AppComponent } from './containers/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from 'environments/environment';
// import { MainNavComponent } from './components/main-nav/main-nav.component';
import { SidenavComponent } from 'app/components/navigation/sidenav/sidenav.component';
import { ToolbarComponent } from 'app/components/navigation/toolbar/toolbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { Store } from 'store';
// feature
import { PrepModule } from 'prep/prep.module';
import { MaterialModule } from './material.module';
import { AuthModule } from 'auth/auth.module';

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    // MainNavComponent,
    SidenavComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PrepModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    LayoutModule,
    AuthModule,
    MaterialModule
  ],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule { }
