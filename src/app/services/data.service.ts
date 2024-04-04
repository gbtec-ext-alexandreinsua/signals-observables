import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private ulr = 'https://rickandmortyapi.com/api/character/';

  private http = inject(HttpClient);

  characters$ = this.http.get(this.ulr);
}
