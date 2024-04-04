import { Component } from '@angular/core';
import { CharacterDetailComponent } from '../character-detail/character-detail.component';
import { CharacterListComponent } from '../character-list/character-list.component';

@Component({
  selector: 'app-character-shell',
  standalone: true,
  imports: [CharacterListComponent, CharacterDetailComponent],
  templateUrl: './character-shell.component.html',
  styleUrl: './character-shell.component.scss',
})
export class CharacterShellComponent {}
