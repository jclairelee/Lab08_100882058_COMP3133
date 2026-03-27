import { Component } from '@angular/core';
import { HeroesComponent } from './heroes/heroes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroesComponent],
  template: `<app-heroes></app-heroes>`,
})
export class App {}
