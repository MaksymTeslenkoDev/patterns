import {Subject, Observer} from "./Interfaces";

export interface WeatherDataState {
    temperature: number;
    humidity: number;
    pressure: number;
}

export class WeatherData implements Subject {
    private observers: Observer[];
    private temperature: number;
    private humidity: number;
    private pressure: number;
    private state: WeatherDataState;

    constructor() {
        this.observers = [];
        this.state = {temperature:0, humidity:0, pressure:0};
    }

    registerObserver(o: Observer) {
        this.observers.push(o);
    }

    removeObserver(o: Observer) {
        const i = this.observers.indexOf(o);
        if (i >= 0) {
            this.observers.splice(i, 1);
        }
    }

    notifyObservers() {
        for (const observer of this.observers) {
            if(observer.shouldUpdate()) observer.update();
        }
    }

    measurementsChanged() {
        this.notifyObservers();
    }

    setMeasurements(state: WeatherDataState) {
        this.state = state;
        this.measurementsChanged();
    }

    getState(): WeatherDataState {
        return this.state;
    }

}
