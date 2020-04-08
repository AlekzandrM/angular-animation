import { Component, OnInit } from '@angular/core';
import {transition, trigger, useAnimation} from '@angular/animations';
import {bounce, slideOutRight} from 'ng-animate';

@Component({
  selector: 'app-animate',
  template: `
    <button (click)="visible = !visible">Toggle</button>
    <hr/>
    <div class="rect" [@bounce] *ngIf="visible"></div>
  `,
  styleUrls: ['./animate.component.scss'],
  animations: [
    trigger('bounce', [
      transition('void => *', useAnimation(bounce, {
      params: { timing: 5, delay: 2 }
      })),
      transition('* => void', useAnimation(slideOutRight))
    ])
  ]
})
export class AnimateComponent implements OnInit {
  visible = true

  constructor() { }

  ngOnInit(): void {
  }

}
