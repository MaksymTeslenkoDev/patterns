import { Observer, DisplayElement, Subject } from '../Interfaces';

class StatisticDisplay implements Observer, DisplayElement {
    private maxTemp: number = 0.0;
    private minTemp: number = 200;
    private tempSum: number = 0.0;
    private numReadings: number = 0;
    private weatherData: Subject;

    constructor(weatherData: Subject) {
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }

    update() {
        const {temperature} = this.weatherData.getState();
        this.tempSum += temperature;
        this.numReadings++;

        if (temperature > this.maxTemp) {
            this.maxTemp = temperature;
        }

        if (temperature < this.minTemp) {
            this.minTemp = temperature;
        }

        this.display();
    }

    shouldUpdate(): boolean {
        return true;
    }
    display() {
        console.log(`Avg/Max/Min temperature = ${this.tempSum / this.numReadings}/${this.maxTemp}/${this.minTemp}`);
    }
}
export default StatisticDisplay;