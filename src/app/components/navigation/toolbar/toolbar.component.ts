import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';

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

  displayBtn = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router) { }

  ngOnInit() {
    this.router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd)
    )
      .subscribe(event => {
        console.log(event.url);
        if (event.url !== '/recipes') {
          this.displayBtn = false;
        } else {
          this.displayBtn = true;
        }
      });
  }

  onToggle() {
    this.sidenavToggle.emit();
  }
}
