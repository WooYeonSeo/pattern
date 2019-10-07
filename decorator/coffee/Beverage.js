class Beverage {
  constructor(milk, soymilk, chocolate, whip) {
    this.milk = milk;
    this.soymilk = soymilk;
    this.chocolate = chocolate;
    this.whip = whip;
  }

  getCost() {
    let cost = 0;
    if (this.milk) cost += 500;
    if (this.soymilk) cost += 700;
    if (this.chocolate) cost += 1000;
    if (this.whip) cost += 300;

    return cost;
  }
}

module.exports = Beverage;
