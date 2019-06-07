import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'auth/shared/services/auth/auth.service';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-nav-sidenav',
  templateUrl: 'sidenav.component.html',
  styleUrls: ['sidenav.component.scss']
})

export class SidenavComponent {
  isHandset$: Observable<boolean> =
    this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(map(result => result.matches));

  @Output() closeSidenav = new EventEmitter<void>();

  displayUsers: any;
  currentBranch: any;
  displayBranch: any;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService, private router: Router,
    public authHttp: HttpClient) { }

  ngOnInit() {
    // this.displayUsers = this.authService.payload().role
    // this.currentBranch = this.authService.payload().branch;
    // this.authHttp.get(`${environment.API}/v1/branch`).subscribe(val => {
    //   for (const [key, value] of Object.entries(val)) {
    //     if (this.currentBranch === key) {
    //       this.displayBranch = value;
    //     }
    //   }
    // });
  }

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