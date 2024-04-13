import {Observer, DisplayElement, Subject} from "../Interfaces"

class CurrentConditionsDisplay implements Observer, DisplayElement {
    private temperature: number;
    private humidity: number;
    private weatherData: Subject;

    constructor(weatherData: Subject) {
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }

    update(): void {
        const {temperature, humidity} = this.weatherData.getState();
        this.temperature = temperature;
        this.humidity = humidity;
        this.display();
    }

    shouldUpdate(): boolean {
        return true;
    }

    display(): void {
        console.log(`Current conditions: ${this.temperature}F degrees and ${this.humidity}% humidity`);
    }
}

export default CurrentConditionsDisplay;