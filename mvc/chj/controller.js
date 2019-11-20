import model from './model.js';

// 뷰로부터의 입력을 처리
const controller = {};

controller.input = {
    inputHandler(e) {
        model.input.setValue(e.target.value);
    }
};

export default controller;
