import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../components/interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DragonballService {
  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
  ]);

  saveToLocalStorage = effect(() => {
    localStorage.setItem('characaters', JSON.stringify(this.characters()));

    // console.log(`Character count: ${this.characters().length}`);
  });

  addCharacter(character: Character) {
    this.characters.update((list) => [...list, character]);
  }
}
