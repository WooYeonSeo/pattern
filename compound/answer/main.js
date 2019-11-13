const { View } = require("./view");
const { Model } = require("./model");
const { Controller } = require("./controller");
/*
 compound pattern의 대표적인 예시는 mvc pattern이다. 
 기존에 사용했던 mvc 패턴이 어떤 패턴들로 이루어져있는지 생각해보자.
 model1의 구조로 기존의 사용하던 mvc와는 다소 차이가 있을 수 있다. 아님 ㅎ...
*/
class MVCMain {
  main() {
    const model = new Model("myname");
    const view = new View();
    const controller = new Controller(model, view);
    model.registerObserver(view);

    // event 발생
    //controller.updateView();
    controller.setName("set new name!");
    //controller.updateView();
  }
}

new MVCMain().main();
