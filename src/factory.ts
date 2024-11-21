interface shape {
    draw(): void;
}

class Rectangle implements shape {
    draw(): void {
        console.log('Rectangle');
    }
}

class Square implements shape {
    draw(): void {
        console.log('Square');
    }
}

class Circle implements shape {
    draw(): void {
        console.log('Circle');
    }
}

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
class ShapeFactory {
    static createShape(shapeType: string): shape| null {
        switch (shapeType) {
            case 'rectangle':
                return new Rectangle();
            case 'square':
                return new Square();
            case 'circle':
                return new Circle();
            default:
                throw new Error('Invalid shape type');
        }
    }
}

const rectangle = ShapeFactory.createShape('rectangle');
rectangle?.draw();

const square = ShapeFactory.createShape('square');
square?.draw();

const circle = ShapeFactory.createShape('circle');
circle?.draw();