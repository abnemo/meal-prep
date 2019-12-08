import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

import { EnsureModuleLoadedOnceGuard } from './guards/ensure-module-loaded-once.guard';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SharedModule } from '../shared/shared.module';

export function jwtTokenGetter() {
  return localStorage.getItem('token');
}

const JWTConfig = {
  config: {
    tokenGetter: jwtTokenGetter,
    whitelistedDomains:
      ['localhost:9100', 'meal-prep.experiments.explabs.io']
  }
}

@NgModule({
  declarations: [AppLayoutComponent, ToolbarComponent, SidenavComponent],
  imports: [SharedModule, RouterModule, HttpClientModule, JwtModule.forRoot(JWTConfig)],
  exports: [AppLayoutComponent, ToolbarComponent, SidenavComponent],
})

export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule)
  }
}