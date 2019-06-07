import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'home-layout',
  templateUrl: 'home-layout.component.html',
  styleUrls: ['home-layout.component.scss']
})

export class HomeLayoutComponent {

  constructor(
    private breakpointObserver: BreakpointObserver
    ) { }

  isHandset$: Observable<boolean> =
    this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(map(result => result.matches));

  ngOnInit() {}
}
