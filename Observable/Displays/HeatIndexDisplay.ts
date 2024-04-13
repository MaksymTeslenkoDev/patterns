import { Observer, DisplayElement, Subject } from '../Interfaces';

class HeatIndexDisplay implements Observer, DisplayElement {
  private heatIndex: number;
  private weatherData: Subject;

  constructor(weatherData: Subject) {
    this.weatherData = weatherData;
    weatherData.registerObserver(this);
  }

  update(): void {
    const { temperature, humidity } = this.weatherData.getState();
    this.heatIndex = this.computeHeatIndex(temperature, humidity);
    this.display();
  }

  shouldUpdate(): boolean {
    return true;
  }

  display(): void {
    console.log(`Heat index is ${this.heatIndex}`);
  }

  private computeHeatIndex(t: number, rh: number): number {
    const c1 = -42.379;
    const c2 = 2.04901523;
    const c3 = 10.14333127;
    const c4 = -0.22475541;
    const c5 = -6.83783 * Math.pow(10, -3);
    const c6 = -5.481717 * Math.pow(10, -2);
    const c7 = 1.22874 * Math.pow(10, -3);
    const c8 = 8.5282 * Math.pow(10, -4);
    const c9 = -1.99 * Math.pow(10, -6);

    const T = t;
    const RH = rh;

    const HI =
      c1 +
      c2 * T +
      c3 * RH +
      c4 * T * RH +
      c5 * T * T +
      c6 * RH * RH +
      c7 * T * T * RH +
      c8 * T * RH * RH +
      c9 * T * T * RH * RH;

    return HI;
  }
}
export default HeatIndexDisplay;