class Observer{
    constructor(){
        this.handlers = {};
        //handler,context
    }
    register(eventName, handler, context){
        if(this.handlers[eventName] === undefined){
            this.handlers[eventName] = [];
        }
        this.handlers[eventName].push({handler,context});
    }
    unregister(eventName,context){
        if(this.handlers[eventName] === undefined) return;
        this.handlers[eventName].map(value=>value.context !== context);
    }
    notify(eventName, data){
        this.handlers[eventName].forEach(value=>{
            value.handler(data);
        })
    }
}
//이걸 구현해보자
module.exports = {
    Observer
}