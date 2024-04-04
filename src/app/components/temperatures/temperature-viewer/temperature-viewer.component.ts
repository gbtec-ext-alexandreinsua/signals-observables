import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { Subscription } from 'rxjs';

import { MatButtonModule } from '@angular/material/button';
import { RoomTemperature } from '../../../model/room-temperature.interface';
import { TemperatureHistory } from '../../../model/temperature-history.interface';
import { RoomTemperatureService } from '../../../services/room-temperature.service';
import { TemperatureNodeComponent } from '../temperature-node/temperature-node.component';

@Component({
  selector: 'app-temperature-viewer',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, MatButtonModule, TemperatureNodeComponent],
  templateUrl: './temperature-viewer.component.html',
  styleUrl: './temperature-viewer.component.scss',
})
export class TemperatureViewerComponent implements OnInit {
  historicalTemperatures = signal<Array<TemperatureHistory>>([]);
  temperatureSubscription!: Subscription;

  constructor(private tempService: RoomTemperatureService) {}

  ngOnInit() {
    this.startSubscription();
  }

  resetTemperatures() {
    this.historicalTemperatures.set([]);
  }

  startSubscription() {
    this.temperatureSubscription = this.tempService.roomTemperatures$.subscribe(
      (newTemperature: RoomTemperature) => {
        this.historicalTemperatures.update((temperatures) => {
          if (newTemperature.temperature) {
            let temperatureIndex = temperatures.find(
              (temperature) => temperature.room === newTemperature.name
            );
            if (temperatureIndex) {
              temperatureIndex.temperatures = [
                newTemperature.temperature,
                ...temperatureIndex.temperatures,
              ];
            } else {
              temperatures = [
                ...temperatures,
                {
                  room: newTemperature.name,
                  temperatures: [newTemperature.temperature],
                },
              ];
            }
          }
          return temperatures;
        });
      }
    );
  }

  endSubscription() {
    this.temperatureSubscription?.unsubscribe();
  }

  setStatic() {
    this.endSubscription();
    this.historicalTemperatures.set([
      {
        room: 'Loft',
        temperatures: [10, 11, 12, 11, 10.5],
      },
      {
        room: 'Guest room',
        temperatures: [13.5, 14.5, 12.5, 12.8],
      },
      {
        room: 'Living room',
        temperatures: [15, 16, 15, 14.3, 12],
      },
    ]);
  }
}
