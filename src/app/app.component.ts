import { animate, query, style, transition, trigger, group } from '@angular/animations';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ 
    trigger('router', [
      transition('0=> 1, 1 => 0, 1 => 2, 2 =>1, 0 => 2, 2 => 0, 0 => 3, 3 => 0, 3 => 4, 4 => 3, 0 => 4, 4 => 0', [
        group([
          query(':enter', [
            style({
              transform: 'translateX(100%)'
            }),
            animate(1000, style({
              transform: 'translateX(0)'
            }))
          ]),
          query(':leave', [
            style({
              transform: 'translateX(0)'
            }),
            animate(500, style({
              transform: 'translateX(-100%)'
            }))
          ])
        ])
      ])
    ])
  ]
})
export class AppComponent {
  title = 'myStore';
}


