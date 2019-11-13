class Model {
  constructor(name) {
    this.name = name;
    this.list = [];
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
    console.log("name :", this.name);
    this.notifyObservers(this.name);
  }

  registerObserver(o) {
    this.list.push(o);
    console.log(this.list);
  }

  // or event listener에 등록하고 변경시 view에 변경사항 통지
  notifyObservers() {
    for (const v of this.list) {
      v.update(this.name);
    }
  }
}
module.exports = {
  Model
};
