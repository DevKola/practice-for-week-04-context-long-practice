// Your code here
class Calculator {
  constructor(total) {
    this.total = 0;
  }

  add(num) {
    return (this.total = num + this.total);
  }

  subtract(num) {
    return (this.total = this.total - num);
  }

  divide(num) {
    return (this.total = this.total / num);
  }

  multiply(num) {
    return (this.total = num * this.total);
  }
}

let calculator = new Calculator();
console.log(calculator.add(50)); // => 50
console.log(calculator.subtract(35)); // => 15
console.log(calculator.multiply(10)); // => 150
console.log(calculator.divide(5)); // => 30
console.log(calculator.total);

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
  module.exports = Calculator;
} catch {
  module.exports = null;
}
