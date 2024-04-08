import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

import { filter, forkJoin, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private ulr = 'https://rickandmortyapi.com/api/character/';

  // 4. Remove the BS

  private http = inject(HttpClient);

  // 1. Encapsulate response
  private characters$ = this.http
    .get(this.ulr)
    .pipe(map((data: any) => data.results.map((c: any) => c)));

  // 2. Expose a signal for the characters in this service
  characters = toSignal(this.characters$);

  // 5. Expose a signa for selectedCharacter
  selectedCharacter = signal(undefined);

  // 7. Remove filter

  // 6. Emit the selected character
  characterSelected(id: any) {
    const foundVehicle = this.characters().find((c: any) => c.id === id);
    this.selectedCharacter.set(foundVehicle);
  }

  // 8. Encapsulate.respose
  private characterEpisodes$ = toObservable(this.selectedCharacter).pipe(
    filter(Boolean),
    switchMap((character: any) =>
      forkJoin(character?.episode.map((link: any) => this.http.get(link)))
    )
  );

  // 9 expose signal
  characterEpisodes = toSignal(this.characterEpisodes$);
}
