import { Component } from '@angular/core';
import { Greetings2Component } from "./greetings2.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-greetings',
  imports: [Greetings2Component, RouterLink],
  styles: [],
  template: `
    <p>Hello dear learner 👋🏾</p>
    <app-greetings2 />
    <a routerLink="welcome">Go to the second route</a>
  `,
  standalone: true,
})
export class GreetingsComponent {}
