import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'auth/shared/services/auth/auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-nav-sidenav',
  templateUrl: 'sidenav.component.html',
  styleUrls: ['sidenav.component.scss'],
})

export class SidenavComponent {
  isHandset$: Observable<boolean> =
    this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(map(result => result.matches));

  @Output() closeSidenav = new EventEmitter<void>();

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService, private router: Router,
    public authHttp: HttpClient) { }

  ngOnInit() {}

  onClose() {
    this.isHandset$.subscribe(value => {
      if (value === true) {
        this.closeSidenav.emit();
      }
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}