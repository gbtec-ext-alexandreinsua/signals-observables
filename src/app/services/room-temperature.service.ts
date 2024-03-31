import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RoomTemperature } from '../model/room-temperature.interface';

@Injectable({
  providedIn: 'root',
})
/**
 * Fake temperature service
 */
export class RoomTemperatureService {
  public roomTemperatures$: BehaviorSubject<RoomTemperature> =
    new BehaviorSubject<RoomTemperature>({ name: '', temperature: 0 });

  constructor() {
    this.emitRandomRoomTemperature();
  }

  /**
   * Update random room temperature
   */
  private emitRandomRoomTemperature(): void {
    setInterval(() => {
      const roomNames = ['Living Room', 'Bedroom', 'Kitchen'];
      const randomRoomIndex = Math.floor(Math.random() * roomNames.length);
      const chosenRoom = roomNames[randomRoomIndex];
      const newTemperature = Math.random() * 20 + 15;
      this.roomTemperatures$.next({
        name: chosenRoom,
        temperature: newTemperature,
      });
    }, 1000);
  }
}
