import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-character-detail',
  standalone: true,
  imports: [MatCardModule, AsyncPipe, JsonPipe],
  templateUrl: './character-detail.component.html',
  styleUrl: './character-detail.component.scss',
})
export class CharacterDetailComponent {
  dataService = inject(DataService);

  character$ = this.dataService.selectedCharacter$;
}
