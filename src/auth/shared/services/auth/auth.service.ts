import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { tap } from 'rxjs/operators';
import { Store } from 'store';
import { BehaviorSubject } from 'rxjs';

export interface User {
  email: string | null;
  uid: string;
  authenticated: boolean;
}

@Injectable()
export class AuthService {
  auth$ = this.af.authState.pipe(tap(next => {
    if (!next) {
      this.store.set('user', null);
      return;
    }
    const user: User = { email: next.email, uid: next.uid, authenticated: true };
    this.store.set('user', user);
  }));
  private loggedIn = new BehaviorSubject<boolean>(false);


  constructor(private store: Store, private af: AngularFireAuth) { }

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  get authState() {
    return this.af.authState;
  }

  createUser(email: string, password: string) {
    return this.af.auth.createUserWithEmailAndPassword(email, password);
  }

  loginUser(email: string, password: string) {
    this.loggedIn.next(true);
    return this.af.auth.signInWithEmailAndPassword(email, password);
  }

  logoutUser() {
    this.loggedIn.next(false);
    return this.af.auth.signOut();
  }
}
