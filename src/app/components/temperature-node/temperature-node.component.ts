import { DecimalPipe } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-temperature-node',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './temperature-node.component.html',
  styleUrl: './temperature-node.component.scss',
})
export class TemperatureNodeComponent implements OnChanges {
  @Input() temperatures: Array<number> | undefined;
  @Input() roomName: string | undefined;

  averageTemperature = 0;
  totalTemperatureCount = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (this.temperatures) {
      this.averageTemperature =
        this.temperatures.reduce((sum, current) => sum + current, 0) /
        this.temperatures.length;
      this.totalTemperatureCount = this.temperatures.length;
    }
  }
}
