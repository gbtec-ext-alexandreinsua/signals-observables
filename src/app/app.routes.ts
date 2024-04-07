import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'home',
    title: 'home',
    loadComponent: () =>
      import('./modules/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'characters',
    title: 'characters',
    loadComponent: () =>
      import(
        './modules/charaters/character-shell/character-shell.component'
      ).then((c) => c.CharacterShellComponent),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];
