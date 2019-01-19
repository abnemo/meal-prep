import { Component, EventEmitter, Output } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav-sidenav',
  templateUrl: 'sidenav.component.html',
  styleUrls: ['sidenav.component.css']
})

export class SidenavComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  @Output() closeSidenav = new EventEmitter<void>();

  constructor(
    private breakpointObserver: BreakpointObserver
  ) { }

  onClose() {
    this.isHandset$.subscribe(value => {
      if (value === true) {
        this.closeSidenav.emit();
      }
    });
  }
}
