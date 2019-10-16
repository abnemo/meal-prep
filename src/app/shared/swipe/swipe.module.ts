import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material';
import { SwipeComponent } from './swipe.component';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { GestureConfig } from './config/gesture-config';

@NgModule({
  declarations: [SwipeComponent],
  imports: [
    CommonModule, MatIconModule],
  exports: [SwipeComponent],
  entryComponents: [SwipeComponent],
  providers: [{
    provide: HAMMER_GESTURE_CONFIG,
    useClass: GestureConfig
  }],
})
export class SwipeModule { }
