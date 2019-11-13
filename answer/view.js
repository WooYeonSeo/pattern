class View {
  printView(name) {
    console.log("Name :: " + name);
  }

  update(name) {
    console.log("Name :: " + name);
    this.printView(name);
  }
}

module.exports = {
  View
};
