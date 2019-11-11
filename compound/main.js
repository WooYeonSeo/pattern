/*
compound pattern의 대표적인 예시는 mvc pattern이다. 
기존에 사용했던 mvc 패턴이 어떤 패턴들로 이루어져있는지 생각해보자.
model1의 구조로 기존의 사용하던 mvc와는 다소 차이가 있을 수 있다.
*/

const View = require('./view');
const Model = require('./model');
const Controller = require('./controller');

class MVCMain { 
    main() { 
        // model은 데이터의 상태를 관리하며 
        // obserable의 역할을 합니다. 뷰를 등록해서 뷰에 상태변화를 통지할 수 있도록 작성해봅시다.
        const model = new Model("myname"); 
        const view = new View(); 
        // controller는 어떤 인자값을 받아야 할까요?
        // controller는 입력에 대한 상태변화를 수행하고, 
        const controller = new Controller(/*인자!!!가 뭐가 들어갈까요?*/); 
        controller.setName("set new name!"); 
        controller.updateView(); 
    } 
}
