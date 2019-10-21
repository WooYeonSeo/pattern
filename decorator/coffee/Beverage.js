class Beverage {
  constructor(milk, soymilk, chocolate, whip) {
    this.milk = milk;
    this.soymilk = soymilk;
    this.chocolate = chocolate;
    this.whip = whip;
<<<<<<< HEAD
    this.twoWhip = twoWhip;
=======
    this.twoWhip = twoWhip
>>>>>>> f24ecf9fa02f506fbbb91f10efa6781cb36ce9b9
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
