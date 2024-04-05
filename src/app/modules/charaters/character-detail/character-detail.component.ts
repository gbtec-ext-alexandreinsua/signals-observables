import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-character-detail',
  standalone: true,
  imports: [MatCardModule, AsyncPipe, JsonPipe],
  templateUrl: './character-detail.component.html',
  styleUrl: './character-detail.component.scss',
})
export class CharacterDetailComponent implements OnInit {
  dataService = inject(DataService);

  character$ = this.dataService.selectedCharacter$;

  info!: string;
  ngOnInit(): void {
    this.character$.subscribe((c) => {
      this.info = `${c.gender}, ${c.status}, Location: ${c.location.name}, Origin: ${c.location.origin}`;
    });
  }
}
