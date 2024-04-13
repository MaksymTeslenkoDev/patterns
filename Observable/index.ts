import { WeatherData } from "./WeatherData"
import { CurrentConditionsDisplay, ForecastDisplay, HeatIndexDisplay, StatisticDisplay } from "./Displays"

(()=>{
    const weatherData = new WeatherData();

    const currentConditionsDisplay = new CurrentConditionsDisplay(weatherData);
    const statisticDisplay = new StatisticDisplay(weatherData);
    const forecastDisplay = new ForecastDisplay(weatherData);
    const heatIndexDisplay = new HeatIndexDisplay(weatherData);

    weatherData.setMeasurements({ temperature:80, humidity:65, pressure:30.4});
    weatherData.setMeasurements({ temperature:82, humidity:70, pressure:29.92});
    weatherData.setMeasurements({ temperature:78, humidity:90, pressure:29.92});
    weatherData.setMeasurements({ temperature:90, humidity:80, pressure:29.92});

})()