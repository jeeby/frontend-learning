import { Routes } from '@angular/router';
import {GreetingsComponent} from './greetings.component';
import {Greetings2Component} from "./greetings2.component";

export const routes: Routes = [
  {
    path: '',
    component: GreetingsComponent,
    title: 'Welcome',
  },
  {
    path: 'welcome/:name',
    component: Greetings2Component,
    title: 'Howdy Stranger',
  }
];
