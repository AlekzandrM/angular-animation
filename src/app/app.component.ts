import { Component } from '@angular/core';
import {boxAnimation} from './app.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [boxAnimation]
})
export class AppComponent {
  boxState = 'start'
  visible = true

  animate() {
    this.boxState = this.boxState === 'start' ? 'end' : 'start'
  }

  animationStarted(event: AnimationEvent) {
    console.log('AnimationStarted: ', event)
  }

  animationDone(event: AnimationEvent) {
    console.log('AnimationDone: ', event)
  }
}
