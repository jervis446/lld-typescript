// Abstract Product Interfaces
interface Shape2D {
    draw(): void;
  }
  
  interface Shape3D {
    render(): void;
  }
  
  // Concrete 2D Shapes
  class Circle2D implements Shape2D {
    draw(): void {
      console.log("Drawing a 2D Circle");
    }
  }
  
  class Rectangle2D implements Shape2D {
    draw(): void {
      console.log("Drawing a 2D Rectangle");
    }
  }
  
  // Concrete 3D Shapes
  class Sphere3D implements Shape3D {
    render(): void {
      console.log("Rendering a 3D Sphere");
    }
  }
  
  class Cube3D implements Shape3D {
    render(): void {
      console.log("Rendering a 3D Cube");
    }
  }
  
  // Abstract Factory Interface
  interface ShapeFactory {
    create2DShape(): Shape2D;
    create3DShape(): Shape3D;
  }
  
  // Concrete Factory for Circle Family
  class CircleFactory implements ShapeFactory {
    create2DShape(): Shape2D {
      return new Circle2D();
    }
  
    create3DShape(): Shape3D {
      return new Sphere3D();
    }
  }
  
  // Concrete Factory for Rectangle Family
  class RectangleFactory implements ShapeFactory {
    create2DShape(): Shape2D {
      return new Rectangle2D();
    }
  
    create3DShape(): Shape3D {
      return new Cube3D();
    }
  }
  
  // Example Usage
  function shapeClient(factory: ShapeFactory): void {
    const shape2D = factory.create2DShape();
    const shape3D = factory.create3DShape();
  
    shape2D.draw(); // Calls the 2D shape method
    shape3D.render(); // Calls the 3D shape method
  }
  
  // Create a Circle Family
  const circleFactory = new CircleFactory();
  console.log("Circle Family:");
  shapeClient(circleFactory);
  
  // Create a Rectangle Family
  const rectangleFactory = new RectangleFactory();
  console.log("\nRectangle Family:");
  shapeClient(rectangleFactory);
  