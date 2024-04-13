import {Observer, DisplayElement, Subject} from "../Interfaces"

class ForecastDisplay implements Observer, DisplayElement {
  private temperature: number;
  private humidity: number;
  private prevPressure:number = 29.92;
  private pressure: number;
  private weatherData: Subject;

  constructor(weatherData: Subject) {
    this.weatherData = weatherData;
    weatherData.registerObserver(this);
  }

  update() {
    const {temperature, humidity, pressure} = this.weatherData.getState();
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.display();
  }

  shouldUpdate(): boolean {
    return true;
  }

  display() {
    if (this.pressure > this.prevPressure) {
      console.log("Improving weather on the way!");
    } else if (this.pressure == this.prevPressure) {
      console.log("More of the same");
    } else if (this.pressure < this.prevPressure) {
      console.log("Watch out for cooler, rainy weather");
    }
  }
}

export default ForecastDisplay;