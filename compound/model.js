// obserable의 역할을 합니다.
export default class Model { 

    constructor( name ) { 
        this.name = name; 
    } 

    getName(){
        return this.name
    }
    // 상태에 대한 변화를 세팅하고 받아오는 부분이 있어야겠죠?? 
    // 변경된 상태를 어디에 무엇을 통지해야 할까요??
    setName(){

    }

    // model1에서는 view를 observer로 관리해야합니다. 어떻게 해야할까요? observer패턴을 떠올려봅시다.

}
