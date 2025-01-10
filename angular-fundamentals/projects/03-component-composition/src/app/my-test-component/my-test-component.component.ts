import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-test-component',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      my-test-component works!
    </p>
  `,
  styles: ``
})
export class MyTestComponentComponent {

}
