import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'auth/shared/services/auth/auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-nav-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.scss']
})

export class ToolbarComponent {
  isHandset$: Observable<boolean> =
    this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(map(result => result.matches));

  @Output() sidenavToggle = new EventEmitter<void>();

  user: any;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService) { }

  ngOnInit() {
    this.user = this.authService.payload().email;
  }

  onToggle() {
    this.sidenavToggle.emit();
  }
}
