import { Component, signal } from '@angular/core';
import { KantoRegion } from './kanto-region/kanto-region';
import { JohtoRegion } from './johto-region/johto-region';

@Component({
  imports: [KantoRegion,JohtoRegion],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('gym-leaders-app');
}
