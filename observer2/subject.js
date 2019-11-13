class Subject{
    constructor(){
        this.observers = [];
    }
    addObserver(observer){
        this.observers.push(observer);
    }
    deleteObserver(observer){
        this.observers.splice(this.observers.indexOf(observser),1);
        
    }
    notifyObservers(){
        this.observers.forEach(value=>{
            value.update();
        })
    }
}
module.exports = Subject;