import { Component, input, signal } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.component.html',
})
export class CharacterAddComponent {
  name = signal('Gohan');
  power = signal(1000);

  addCharacter(name: string, power: number) {
    if (!name || !power || power <= 0) {
      return;
    }

    const newCharacter: Character = {
      //  id: this.characters().length + 1,
      id: 100,
      name: name,
      power: power,
    };

    //    this.characters.update((list) => [...list, newCharacter]);

    console.log(name, power);

    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
