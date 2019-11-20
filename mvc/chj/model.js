// 컨트롤러에 의해 상태가 변경됨
// 변경된 상태를 뷰에 뿌려줌
const model = {};

model.input = {
    ref: undefined,
    setRef() {
        this.ref = document.getElementById('myInput');
    },
    value: '',
    setValue(value) {
        this.value = value;
        // observer pattern 적용 가능
        model.span.setValue(this.value);
    },
    setInputEventHandler(inputEventHandler) {
        this.ref.addEventListener('input', inputEventHandler);
    }
};

model.span = {
    ref: undefined,
    setRef() {
        this.ref = document.getElementById('mySpan');
    },
    value: '',
    setValue(value) {
        this.value = value;
        this.render();
    },
    render() {
        this.ref.textContent = this.value;
    }
};


export default model;
