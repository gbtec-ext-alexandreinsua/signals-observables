import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'home',
    pathMatch: 'full',
    title: 'home',
    loadComponent: () =>
      import('./modules/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'temperature',
    pathMatch: 'full',
    title: 'temperature',
    loadComponent: () =>
      import(
        './components/temperatures/temperature-viewer/temperature-viewer.component'
      ).then((c) => c.TemperatureViewerComponent),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];
