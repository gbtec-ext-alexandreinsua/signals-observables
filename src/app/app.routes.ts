import { Route } from '@angular/router';

export const appRoutes: Route[] = [
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
    redirectTo: 'temperature',
  },
];
