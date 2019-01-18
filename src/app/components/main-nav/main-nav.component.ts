import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { Store } from 'store';
import { AuthService, User } from '../../../auth/shared/services/auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
})
export class MainNavComponent implements OnInit, OnDestroy {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  user$: Observable<User>;
  subscription: Subscription;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private store: Store,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.subscription = this.authService.auth$
      .subscribe();
    this.user$ = this.store.select<User>('user');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  async logout() {
    console.log('logout!');
    await this.authService.logoutUser();
    this.router.navigate(['auth/login']);
  }
}
