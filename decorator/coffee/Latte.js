const Beverage = require("./Beverage");

class Latte extends Beverage {
  getFinalCost() {
    return this.getCost() + 3500;
  }
}

module.exports = Latte;
