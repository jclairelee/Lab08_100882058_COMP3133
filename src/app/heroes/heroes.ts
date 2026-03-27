import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemoveSpacesPipe } from '../remove-spaces.pipe';
import { InputFormatDirective } from '../input-format.directive';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, RemoveSpacesPipe, InputFormatDirective],
  templateUrl: './heroes.html',
  styleUrls: ['./heroes.css'],
})
export class HeroesComponent {
  heroes = [
    { id: 1, name: 'Batman' },
    { id: 2, name: 'Super-Man' },
    { id: 3, name: 'Wonder-Woman' },
    { id: 4, name: 'Green-Lantern' },
  ];

  selectedHero: any;

  selectHero(hero: any) {
    this.selectedHero = hero;
  }
}
