import { Directive, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Directive({
  selector: '[mpRelativeCenter]'
})
export class RelativeCenterDirective {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(map(result => result.matches))

  constructor(
    el: ElementRef,
    private breakpointObserver: BreakpointObserver
  ) {
    this.isHandset$.subscribe(
      value => {
        (value) ? el.nativeElement.style.width = '100%' : el.nativeElement.style.width = 'calc(100vw - 200px)'
      })
  }
}
