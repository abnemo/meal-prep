import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Component, EventEmitter, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-nav-sidenav',
  templateUrl: 'sidenav.component.html',
  styleUrls: ['sidenav.component.css']
})

export class SidenavComponent {
  isHandset$: Observable<boolean> =
      this.breakpointObserver.observe(Breakpoints.Handset)
          .pipe(map(result => result.matches));

  @Output() closeSidenav = new EventEmitter<void>();

  constructor(private breakpointObserver: BreakpointObserver) {}

  onClose() {
    this.isHandset$.subscribe(value => {
      if (value === true) {
        this.closeSidenav.emit();
      }
    });
  }
}
