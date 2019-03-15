import { Component } from '@angular/core';
import { Store } from 'store';
import { AuthService, User } from 'auth/shared/services/auth/auth.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'home-layout',
  templateUrl: 'home-layout.component.html',
  styleUrls: ['home-layout.component.scss']
})

export class HomeLayoutComponent {

  constructor(
    private authService: AuthService,
    private store: Store) { }

  user$: Observable<User>;
  subscription!: Subscription;

  ngOnInit() {
    this.subscription = this.authService.auth$.subscribe();
    this.user$ = this.store.select<User>('user');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
