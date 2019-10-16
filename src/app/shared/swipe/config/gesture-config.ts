import { HammerGestureConfig, } from '@angular/platform-browser';

export class GestureConfig extends HammerGestureConfig {
  overrides = {
    pan: {
      touchAction: 'auto',
      direction: 4,
      treshold: 30,
    },
    pinch: {
      enable: false
    },
    rotate: {
      enable: false
    },
    swipe: {
      enable: false
    }
  };
}
