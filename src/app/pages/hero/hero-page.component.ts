import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: 'hero-page.component.html',
  imports: [UpperCasePipe],
})
export class HeroPageComponent {
  name = signal('Ironman');
  age = signal(45);

  heroDescription = computed(() => {
    const description = `${this.name()} tiene: ${this.age()} años`;
    return description;
  });

  capitalizedName = computed(() => {
    return this.name().toUpperCase();
  });

  changeHero() {
    this.name.update(() => 'Spiderman');
    this.age.update(() => 22);
  }

  resetForm() {
    this.name.update(() => 'IronMan');
    this.age.update(() => 45);
  }

  changeAge() {
    this.age.update(() => 60);
  }
}
