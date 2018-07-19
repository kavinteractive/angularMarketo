import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'user',
  template: `<h1>Hello {{name}}, are you {{years}} years old? And is your email {{email}}?</h1>
    <button (click)="toggleHobbies()">{{showHobbies ? 'Hide Hobbies' : 'Show Hobbies'}}</button>
    <div *ngIf="showHobbies">
        <ul>
            <li *ngFor="let hobby of hobbies; let i = index">
                {{hobby}} <button (click)="deleteHobby(i)">x</button>
            </li>
        </ul>
        <button (click)="addHobby(hobby.value)">
            <label> Add Hobby: </label><br>
        </button>
        <input type="text" #hobby />
        <form>
        <h2>You live in {{address.city}}</h2>
            <label>
                Name:
            </label>
            <input name="name" type="text" [(ngModel)]='name' placeholder="Please enter name" />
            <label>
                Email:
            </label>
            <input name="email" type="text" [(ngModel)]='email' placeholder="Please enter name" />
            <label>
                Years:
            </label>
            <input name="years" type="text" [(ngModel)]='years' placeholder="Please enter name" />
            <label>
                Name:
            </label>
            <input name="address.city" type="text" [(ngModel)]='address.city' placeholder="Please enter name" />
        </form>

    </div>
  `,
})
export class User  {
    name: string;
    email: string;
    years: string;
    address: address
    hobbies: string[];
    showHobbies: boolean;

    constructor(private router: Router) {
        console.log('COnstructur running');
        this.name = 'Angular';
        this.years = '22';
        this.email = 'ish.rissam@gmail.com';
        this.hobbies = ['Lapotp', 'lol', 'dancing']
        this.showHobbies = true;
        this.address = {
            city: "jammu",
            street: 'H.No 101',
            state: 'J&K'
        }
    }
    toggleHobbies = () => {
        this.showHobbies = !this.showHobbies
    }
    addHobby(hobby: string) {
        this.hobbies.push(hobby)
    }
    deleteHobby(index: number) {
        this.hobbies.splice(index, 1)
    }
}

interface address {
    street: string;
    city: string;
    state: string;
}
