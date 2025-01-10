import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Car} from '../car';

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article class="listing">
      <div class="image-parent">
        <img class="product-image" src="https://placehold.co/100x100"/>
      </div>
      <section class="details">
        <p class="title">
          <span>{{ car.make }} {{ car.model }}</span>
          <span class="detail" style="float:right; margin-top: 10px">
            <button (click)="handleCarSaved()">Save</button>
          </span>
        </p>
        <hr/>
        <p class="detail">
          <span>Year</span>
          <span><!-- year --></span>
        </p>
        <div class="detail">
          <span>Transmission</span>
          <span>{{ car.transmission }}</span>
        </div>
        <p class="detail">
          <span>Mileage</span>
          <span>{{ car.miles }} miles</span>
        </p>
        <p class="detail">
          <span>Price</span>
          <span>&dollar;{{ car.price }}</span>
        </p>
      </section>
    </article>
  `,
  styles: ``,
})
export class ListingComponent {

  @Input({
    required: true // The required attribute is set to true to indicate that the car property is required.
  })
  car!: Car; // Can either initialise with default values, or use the ! symbol to indicate that the input will be provided.

  @Output() carSaved = new EventEmitter<Car>();

  handleCarSaved() {
    this.carSaved.emit(this.car);
  }
}
