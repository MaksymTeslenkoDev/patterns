import { WeatherDataState } from '../WeatherData';
import Observer from './Observer';

interface Subject{
    registerObserver(o: Observer): void;
    removeObserver(o: Observer): void;
    notifyObservers(): void;
    getState():WeatherDataState;
}
export default Subject;