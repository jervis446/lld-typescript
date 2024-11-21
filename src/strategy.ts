// Step 1: Define the Strategy interface
interface DriveStrategy {
    drive(): string;
  }
  
  // Step 2: Implement concrete strategies for different driving behaviors
  class LandDrive implements DriveStrategy {
    drive(): string {
      return "Driving on the road.";
    }
  }
  
  class WaterDrive implements DriveStrategy {
    drive(): string {
      return "Sailing on water.";
    }
  }
  
  class AirDrive implements DriveStrategy {
    drive(): string {
      return "Flying in the air.";
    }
  }
  
  // Step 3: Create the Vehicle class that uses the strategy
  class Vehicle {
    private driveStrategy: DriveStrategy;
  
    constructor(driveStrategy: DriveStrategy) {
      this.driveStrategy = driveStrategy;
    }
  
    setDriveStrategy(driveStrategy: DriveStrategy): void {
      this.driveStrategy = driveStrategy;
    }
  
    drive(): string {
      return this.driveStrategy.drive();
    }
  }
  
  // Step 4: Demonstrate usage
  const car = new Vehicle(new LandDrive());
  console.log("Car:", car.drive()); // Output: Driving on the road.
  
  const boat = new Vehicle(new WaterDrive());
  console.log("Boat:", boat.drive()); // Output: Sailing on water.
  
  const airplane = new Vehicle(new AirDrive());
  console.log("Airplane:", airplane.drive()); // Output: Flying in the air.
  
  // Dynamically change behavior
  car.setDriveStrategy(new AirDrive());
  console.log("Car (after strategy change):", car.drive()); // Output: Flying in the air.
  