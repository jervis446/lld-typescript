// Component Interface
interface Pizza {
	getDescription(): string;
	getCost(): number;
}

// Concrete Component
class PlainPizza implements Pizza {
	getDescription(): string {
		return "Plain Pizza";
	}

	getCost(): number {
		return 200; // Base cost in INR
	}
}

// Abstract Decorator
abstract class PizzaDecorator implements Pizza {
	protected pizza: Pizza;

	constructor(pizza: Pizza) {
		this.pizza = pizza;
	}

	getDescription(): string {
		return this.pizza.getDescription();
	}

	getCost(): number {
		return this.pizza.getCost();
	}
}

// Concrete Decorators
class Cheese extends PizzaDecorator {
	getDescription(): string {
		return `${this.pizza.getDescription()}, Cheese`;
	}

	getCost(): number {
		return this.pizza.getCost() + 50; // Cheese costs 50 INR
	}
}

class Pepperoni extends PizzaDecorator {
	getDescription(): string {
		return `${this.pizza.getDescription()}, Pepperoni`;
	}

	getCost(): number {
		return this.pizza.getCost() + 80; // Pepperoni costs 80 INR
	}
}

class Olives extends PizzaDecorator {
	getDescription(): string {
		return `${this.pizza.getDescription()}, Olives`;
	}

	getCost(): number {
		return this.pizza.getCost() + 30; // Olives cost 30 INR
	}
}

// Example Usage
const plainPizza = new PlainPizza();
console.log(`${plainPizza.getDescription()} costs ${plainPizza.getCost()} INR`);

const cheesePizza = new Cheese(plainPizza);
console.log(`${cheesePizza.getDescription()} costs ${cheesePizza.getCost()} INR`);

const pepperoniPizza = new Pepperoni(cheesePizza);
console.log(`${pepperoniPizza.getDescription()} costs ${pepperoniPizza.getCost()} INR`);

const fullyLoadedPizza = new Olives(pepperoniPizza);
console.log(`${fullyLoadedPizza.getDescription()} costs ${fullyLoadedPizza.getCost()} INR`);
