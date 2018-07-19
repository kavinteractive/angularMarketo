import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
declare var Munchkin: any;
@Component({
  selector: 'my-app',
  template: `
    <div style="padding: 5px">
      <ul>
        <li><a routerLink="home">Home</a></li>
        <li><a routerLink="test">User</a></li>
        <router-outlet></router-outlet>
      </ul>
    </div>
  `,
})
export class AppComponent {
  name = 'Angular';
  constructor(private router: Router) {
    this.router.events.subscribe((nEvent: NavigationStart) => {
      if (nEvent instanceof NavigationStart) {
        Munchkin.munchkinFunction('clickLink', { href: nEvent.url });
        console.log('Called munchkin from ', nEvent.url);
      }
    });
  }
}
