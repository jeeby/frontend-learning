import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-greetings2',
  imports: [],
  template: `<p>Welcome to the second route, {{ visitorName }}!</p>`,
  standalone: true,
})

export class Greetings2Component {
  visitorName = 'Stranger'; // Destination for route info.. going to put route info in here

  @Input() // Input decorator to allow parent component to set name
  set name(value: string) { // this property name needs to match the dynamic placeholder name in the route
    this.visitorName = value;
  }
}
