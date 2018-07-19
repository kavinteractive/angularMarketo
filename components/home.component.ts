import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
    template: '<h1>This is the home page</h1>'
})
export class HomeComponent {
    constructor(private router: Router) {

        console.log('Running Home component')
    }
}

