class Person{
    constructor(name){
        this.name = name;
    }
}//SUB

class Boss extends Person{
    constructor(observer){
        super("Boss");
        this.observer = observer;
    }
    speak(comment){
        console.log("사장님 : ", comment);
        this.observer.notify('bossSpeak',comment);
    }
}
class Manager extends Person{
    constructor(){
        super("Manager");
        this.bossComment = '';
    }
    listen(comment){ //사장 말 귀담아 듣기
        this.bossComment = comment;
        console.log("사장님말씀 : "+this.bossComment);
    }
}
class Programmer extends Person{
    constructor(){
        super("Programmer");
    }
    drop(comment){ //한귀로 듣고
        console.log("난 안듣고있음")
        return comment; //한귀로 흘러보내기
    }
}

module.exports = {
    Boss,
    Manager,
    Programmer
}