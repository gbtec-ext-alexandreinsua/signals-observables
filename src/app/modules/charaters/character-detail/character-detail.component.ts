import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-character-detail',
  standalone: true,
  imports: [MatCardModule, AsyncPipe, JsonPipe, CommonModule],
  templateUrl: './character-detail.component.html',
  styleUrl: './character-detail.component.scss',
})
export class CharacterDetailComponent {
  dataService = inject(DataService);

  character = this.dataService.selectedCharacter as any;

  info = computed(() =>
    this.character()
      ? `${this.character()?.gender}, ${this.character()?.status}, Location: ${
          this.character()?.location.name
        }, Origin: ${this.character()?.location.origin}`
      : ''
  );

  episodes = this.dataService.characterEpisodes as any;
}
