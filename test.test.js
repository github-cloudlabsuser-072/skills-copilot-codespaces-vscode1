// Create a new instance of Calculator
const calculator = new Calculator();

// Test the read() method
calculator.read();
console.log(calculator.a); // Expected output: [user input for first value]
console.log(calculator.b); // Expected output: [user input for second value]

// Test the sum() method
console.log(calculator.sum()); // Expected output: [sum of a and b]

// Test the mul() method
console.log(calculator.mul()); // Expected output: [product of a and b]

// Test the sub() method
console.log(calculator.sub()); // Expected output: [difference between a and b]

// Test the div() method
console.log(calculator.div()); // Expected output: [quotient of a and b, or an error message if b is 0]