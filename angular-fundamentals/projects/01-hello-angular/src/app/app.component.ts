import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <h1>Yo!! If you are reading this...</h1>
    <p>Things have worked out well! 🎉</p>
    <h2>My favourite movies</h2>
    <ol>
      <li>Pulp Fiction</li>
      <li>Inception</li>
      <li>The Dark Knight</li>
    </ol>
  `,
  styles: `
    ol {
      margin-bottom: 10px;
      list-style-type: upper-roman;
    }
    li { margin-bottom: 5px; }
    h2 { color: red; }

  `
})
export class AppComponent {}
