import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KantoRegion } from './kanto-region/kanto-region';

@Component({
  imports: [KantoRegion],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('gym-leaders-app');
}
