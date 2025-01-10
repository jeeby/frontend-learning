import { Component } from '@angular/core';
import { Car } from './car';
import {ListingComponent} from "./listing/listing.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListingComponent],
  template: `
    <h1>Saved {{ savedCarList.length }} of {{ carList.length}} Cars </h1>
    <section class="container">
      @for(carEntry of carList; track carEntry) {
        <app-listing [car]="carEntry" (carSaved)="addCarToSaved($event)" />
      }
    </section>
    <h2>Saved Cars</h2>
    <section class="container" style="float: left">
      <ul>
        @for(savedCar of savedCarList; track savedCar) {
            <li>{{ savedCar.make }} {{savedCar.model}}</li>
        } @empty {
          <li>No saved cars yet</li>
        }
      </ul>
    </section>
  `,
  styles: [],
})
export class AppComponent {
  savedCarList: Car[] = [];
  carList: Car[] = [
    {
      make: 'Bonda',
      model: 'Disaccord',
      miles: 100000,
      price: 230,
      year: 1991,
      transmission: 'Automatic',
    },
    {
      make: 'Foyoda',
      model: 'Famery',
      miles: 54354,
      price: 1000,
      year: 2022,
      transmission: 'Automatic',
    },
    {
      make: 'Specific Motors',
      model: 'Spoke',
      miles: 100000,
      price: 230,
      year: 1991,
      transmission: 'Automatic',
    },
    {
      make: 'Fjord',
      model: 'Pocus',
      miles: 1,
      price: 22330,
      year: 2023,
      transmission: 'Automatic',
    },
  ];
  addCarToSaved(car: Car) {
    this.savedCarList.push(car);
  }
}
