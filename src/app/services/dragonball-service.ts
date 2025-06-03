import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../components/interfaces/character.interface';

const loadFromLocalStorage = (): Character[] => {
  const character = localStorage.getItem('characters');

  return character ? JSON.parse(character) : [];
};

@Injectable({ providedIn: 'root' })
export class DragonballService {
  characters = signal<Character[]>(loadFromLocalStorage());

  saveToLocalStorage = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.characters()));

    // console.log(`Character count: ${this.characters().length}`);
  });

  addCharacter(character: Character) {
    this.characters.update((list) => [...list, character]);
  }
}
