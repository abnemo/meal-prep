import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Component, EventEmitter, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-nav-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.css']
})

export class ToolbarComponent {
  isHandset$: Observable<boolean> =
      this.breakpointObserver.observe(Breakpoints.Handset)
          .pipe(map(result => result.matches));

  @Output() sidenavToggle = new EventEmitter<void>();

  constructor(private breakpointObserver: BreakpointObserver) {}

  onToggle() {
    this.sidenavToggle.emit();
  }
}
