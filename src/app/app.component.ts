import { Component } from '@angular/core';
import { TemperatureViewerComponent } from './components/temperature-viewer/temperature-viewer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TemperatureViewerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'signals-observables';
}
