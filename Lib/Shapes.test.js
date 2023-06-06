const { Triangle, Circle, Square } = require('./Shapes');

describe('Triangle', () => {
    it('should render a triangle SVG string with the specified color', () => {
      const triangle = new Triangle();
      triangle.setColor('blue'); 
  
      
      expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
  });

  describe('Circle', () => {
    it('should render a circle SVG string with the specified color', () => {
      const circle = new Circle();
      circle.setColor('red'); 
  
      
      expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
    });
  });

  describe('Square', () => {
    it('should render a square SVG string with the specified color', () => {
      const square = new Square();
      square.setColor('green'); // Set the color of the square
  
      
      expect(square.render()).toEqual('<rect x="50" y="50" width="200" height="100" fill="green" />');
    });
  });