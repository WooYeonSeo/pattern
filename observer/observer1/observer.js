class Observer{
    constructor(){
        this.handlers = {};
        //handler,context
    }
    register(eventName, handler, context){
        this.handlers[eventName] = {
            handler,
            context
        }

    }
    unregister(eventName){
        this.handlers[eventName] = {}
    }
    notify(eventName, data){
        this.handlers[eventName]['handler'](data);
    }
}
//이걸 구현해보자
module.exports = {
    Observer
}