import model from './model.js';

// 뷰로부터의 입력을 처리 (라우팅 자체는 뷰에서 하는 듯..)
// 모델로부터 데이터를 받은 후, 가공
// 가공된 데이터를 뷰에 뿌려줌
const presenter = {};

presenter.input = {
    inputHandler(e) {
        // 뷰로부터 받은 입력 값을 가공
        const val = `내가 가로되, ${e.target.value}라고 말하였다...`;
        // 모델에 변경된 값을 저장
        model.input.setValue(val);
        // 모델로부터 응답을 받음
        const response = model.input.getValue();
        model.span.setValue(response);
        // 받은 응답을 뷰에 뿌려줌
        model.span.ref.textContent = response;
    }
};

export default presenter;
