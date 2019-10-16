import { Directive, Output, EventEmitter, HostListener } from '@angular/core';
import { Subject, Observable, interval } from 'rxjs';
import { takeUntil, tap, filter } from 'rxjs/operators';

@Directive({
  selector: '[holdable]',
})

export class HoldableDirective {
  @Output() holdTime: EventEmitter<number> = new EventEmitter()
  state: Subject<string> = new Subject();
  cancel: Observable<string>

  constructor() {
    this.cancel = this.state.pipe(
      filter(v => v === 'cancel'),
      tap(v => {
        console.log('stopped hold')
        this.holdTime.emit(0)
      })
    )
  }

  @HostListener('mouseup', ['$event'])
  @HostListener('mouseleave', ['$event'])
  onExit() {
    this.state.next('cancel')
  }

  @HostListener('mousedown', ['$event'])
  onHold() {
    console.log('startedhold')
    this.state.next('start')
    const n = 100
    interval(n).pipe(
      takeUntil(this.cancel),
      tap(v => {
        console.log('v', v)
        this.holdTime.emit(v * n)
      })
    )
      .subscribe()


  }
}