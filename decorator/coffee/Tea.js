const Beverage = require("./Beverage");

class Tea extends Beverage {
  getFinalCost() {
    return this.getCost() + 3000;
  }
}

module.exports = Tea;
