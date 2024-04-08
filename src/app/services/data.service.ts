import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import {
  BehaviorSubject,
  combineLatest,
  filter,
  forkJoin,
  map,
  switchMap,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private ulr = 'https://rickandmortyapi.com/api/character/';

  private characterSelectedSubject = new BehaviorSubject(0);
  characterSelected$ = this.characterSelectedSubject.asObservable();

  private http = inject(HttpClient);

  characters$ = this.http
    .get(this.ulr)
    .pipe(map((data: any) => data.results.map((c: any) => c)));

  selectedCharacter$ = combineLatest([
    this.characters$,
    this.characterSelected$,
  ]).pipe(map(([characters, id]) => characters.find((c: any) => c.id === id)));

  characterEpisodes$ = this.selectedCharacter$.pipe(
    filter(Boolean),
    switchMap((character) =>
      forkJoin(character.episode.map((link: any) => this.http.get(link)))
    )
  );

  characterSelected(id: any) {
    this.characterSelectedSubject.next(id);
  }
}
