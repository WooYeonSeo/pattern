const Latte = require("./Latte");
const Tea = require("./Tea");

const latte = new Latte(true, true, true, true);
const tea = new Tea(false, false, false, false);

console.log(latte.getFinalCost());
console.log(tea.getFinalCost());
