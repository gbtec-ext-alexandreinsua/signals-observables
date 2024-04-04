import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [MatCardModule, AsyncPipe, NgFor, CommonModule, MatButtonModule],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.scss',
})
export class CharacterListComponent {
  pageTitle = 'Characters';

  dataService = inject(DataService);

  characters$ = this.dataService.characters$;

  onSelected(id: any) {
    this.dataService.characterSelected(id);
  }
}
