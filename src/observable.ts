// Step 1: Define the Observer interface
interface Observer {
  update(temperature: number): void;
}

// Step 2: Define the Subject interface
interface Subject {
  addObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void;
}

// Step 3: Implement the WeatherStation (Subject)
class WeatherStation implements Subject {
  private observers: Observer[] = [];
  private temperature: number = 0;

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this.temperature);
    }
  }

  // Method to set a new temperature
  setTemperature(temp: number): void {
    console.log(`WeatherStation: New temperature is ${temp}°C`);
    this.temperature = temp;
    this.notifyObservers(); // Notify all observers of the change
  }
}

// Step 4: Implement Concrete Observers
class TemperatureDisplay implements Observer {
  update(temperature: number): void {
    console.log(`TemperatureDisplay: Current temperature is ${temperature}°C`);
  }
}

class ForecastDisplay implements Observer {
  update(temperature: number): void {
    const forecast = temperature > 25 ? "Sunny" : "Rainy";
    console.log(`ForecastDisplay: Forecast is ${forecast}`);
  }
}

// Step 5: Demonstrate usage
const weatherStation = new WeatherStation();

// Create observers
const tempDisplay = new TemperatureDisplay();
const forecastDisplay = new ForecastDisplay();

// Register observers to the WeatherStation
weatherStation.addObserver(tempDisplay);
weatherStation.addObserver(forecastDisplay);

// Simulate temperature changes
weatherStation.setTemperature(30); // Notify observers
weatherStation.setTemperature(20); // Notify observers

// Unregister one observer
weatherStation.removeObserver(forecastDisplay);

// Simulate another temperature change
weatherStation.setTemperature(15); // Notify remaining observers
