import {
  animate,
  style,
  transition,
  trigger,
  keyframes
} from '@angular/animations';

export const swipeAnimations = [
  trigger('slideLeft', [
    transition('* => *', animate(200,
      keyframes([
        style({ left: '*', offset: 0 }),
        style({ left: '0', offset: 1 }),
      ])
    ))
  ])
]