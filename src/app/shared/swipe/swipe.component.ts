import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { swipeAnimations } from './swipe.animations';

@Component({
  selector: 'mp-swipe',
  templateUrl: './swipe.component.html',
  styleUrls: ['./swipe.component.scss'],
  animations: swipeAnimations
})

export class SwipeComponent implements OnInit {
  @Output() swiped = new EventEmitter<any>()
  slideThreshold: number = 30
  elementLeftSign = true;
  done = false;
  constructor() { }

  ngOnInit() { }

  onPanRight(event, elementReference) {
    elementReference.style.left = event.deltaX + 'px';
    elementReference.offsetLeft > 0 ? this.elementLeftSign = true : this.elementLeftSign = false;
  }

  panend(event) {
    if (event.deltaX > 200) {
      this.swiped.emit('left')
    } else {
      this.done = true
    }
  }

  alignComplete(event): void {
    event.element.style.left = '0px';
    event.element.offsetLeft > 0 ? this.elementLeftSign = true : this.elementLeftSign = false;
    this.done = false;
  }

}
