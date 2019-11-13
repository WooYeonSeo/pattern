class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }
  setName(name) {
    this.model.setName(name);
  }
  getName() {
    return this.model.getName();
  }
  updateView() {
    this.view.printView(this.model);
  }
}

module.exports = {
  Controller
};
