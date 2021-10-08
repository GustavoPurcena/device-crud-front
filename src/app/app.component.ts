import { trigger, transition, style, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { onSideNavChange, animateText, onMainContentChange } from './animations/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [onSideNavChange, animateText, onMainContentChange,
    trigger(
      'enterAnimation', [
      transition(':enter', [
        style({
          transform: 'translateX(-100%)'
        }),
        animate('.2s ease-out',
          style({ transform: 'translateX(0%)' })
        )
      ]),
      transition(':leave', [
        style({
          transform: 'translateX(0)'
        }),
        animate('.2s ease-out',
          style({ transform: 'translateX(-100%)' })
        )
      ])
    ]
    )]

})
export class AppComponent {
  public sideNavState = false;
  title = 'device-crud-front';
  pages = [
    {
      name: 'Categories', link: '/categories', icon: 'category',
      active: false, function: null
    },
    {
      name: 'Devices', link: '/devices', icon: 'devices',
      active: false, function: null
    }
  ];


  changeNav(position: boolean) {
    this.sideNavState = position;
  }

  changeHover(page = null) {
    if (page) {
      page.active = true;
      this.pages.forEach(pag => {
        if (pag !== page) {
          pag.active = false;
        }
      });
    } else {
      this.pages.forEach(pag => {
        pag.active = false;
      });
    }
  }

}
