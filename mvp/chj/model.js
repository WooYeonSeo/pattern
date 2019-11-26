// 프레젠터에 의해 상태가 변경됨
// 프레젠터에 응답을 함
const model = {};

model.input = {
    ref: undefined,
    setRef() {
        this.ref = document.getElementById('myInput');
    },
    value: '',
    setValue(value) {
        this.value = value;
        console.log(`model.input.value = ${this.value}`);
    },
    getValue(){
        return this.value;
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
        console.log(`model.span.value = ${this.value}`);
    }
};


export default model;
