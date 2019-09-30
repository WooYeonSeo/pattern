---
marp: true
---
# Observer Pattern
----
# Observer Pattern 이란?
- 옵저버들의 목록을 객체에 등록하여 상태 변화가 있을 때마다 메서드 등을 통해서 객체가 직접 목록의 각 옵저버에게 통지하도록 하는 디자인 패턴
- 데이터의 변경이 발생했을때 상대 클래스나 객체에 의존하지 않으면서 데이터 변경을 통보할 때 사용
    - 의존성 최소화
- 각 모듈은 서로 알아야 하는 상태 변화가 있을때마다 상대 모듈에게 필요한 상태가 변했음을 Observer를 통해서 Notify하게 된다. 
- [발행/구독 모델](https://ko.wikipedia.org/wiki/%EB%B0%9C%ED%96%89-%EA% B5%AC%EB%8F%85_%EB%AA%A8%EB%8D%B8)으로도 불림

----
### Class Diagram
![](https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Observer.svg/1281px-Observer.svg.png)

----
- Java
```Java
public interface Observer{
    void notify();
}
public class ContcreteObserverA implements Observer{
    @Override
    void notify(){
        System.out.println("AAA");
    }
}
public class ContcreteObserverB implements Observer{
   @Override
    void notify(){
         System.out.println("BBB");
    }
}
```
----
```Java
public class Subject{
    public List<Observer> observerCollection = new ArrayList<>();
    void registerObserver(Observer obs){
        observerCollection.add(obs);
    }
    void unregisterObserver(Observer obs){
        observerCollection.remove(obs);
    }
    void notifyObsevers(){
        for(Observer obs : observerCollection){
            obs.notify();
        }
    }
}
```
----
```Java
public static void Main(String[] args){
    Subject sub = new Subject();
    sub.reigsterObserver(new ContcreteObserverA());
    sub.reigsterObserver(new ContcreteObserverB());
    sub.notifyObservers();
    /*
       AAA
       BBB        
    */
}
```

----
1. **Observer**
- 데이터 변경을 통보받는 인터페이스
- Subject에서 Observer 인터페이스의 update 메서드를 호출함으로써 ConcretObserver에게 통보
2. **Subject**
- ConcreteObserver 객체를 관리하는 요소
3. **ConcreteSubject**
- 변경 관리 대상이 되는 데이터가 있는 클래스
----

## 대표적인 이용 사례
1. 외부에서 발생한 이벤트에 대한 응답
(이벤트 기반 프로그래밍)
2. 객체의 속성값 변화에 따른 응답
3. MVC 패턴과 자주 결합
    - 모델에서 일어나는 이벤트를 통보 받아 뷰의 내용을 바꾸는 경우

----
## NodeJS EventEmiiter
- Node.js에 내장되어있는 일종의 옵저버 패턴
- Node는 이벤트 기반으로 하는 비동기 방식으로 처리를 함
- 이벤트 처리를 하기 위해서 `EventEmitter`라는 클래스를 제공

```Javascript
const EventEmitter = require('events').EventEmitter;
class MyEmitter extends EventEmitter{};
const myEmitter = new MyEmitter();
myEmitter.on('A',callback); // 이벤트 등록
myEmitter.emit('A'); //callback함수 실행
```
----
```Javascript
on(eventName, callback, context = null, weight = 1) {
    const self = internal(this);
    //internal ==> weakMap이 있는지 없는지 확인
    //WeakMap은 기존 객체를 약한 참조해서 가비지컬렌션을 방해하지 않게하기 위해서 사용한다고 함
    if (typeof callback !== 'function') {
      throw new TypeError(`${callback} is not a function`);
    }

    // If event wasn't added before - just add it
    // and define callbacks as an empty object.
    if (!this._has(eventName)) {
      self._events.add(eventName);
      _callbacks[eventName] = [];
    } else {
      // Check if we reached maximum number of listeners.
      if (this._achieveMaxListener(eventName)) {
        self._console.warn(`Max listeners (${self._maxListeners})` +
          ` for event "${eventName}" is reached!`);
      }

      // Check if the same callback has already added.
      if (this._callbackIsExists(...arguments)) {
        self._console.warn(`Event "${eventName}"` +
          ` already has the callback ${callback}.`);
      }
    }

    this._addCallback(...arguments);

    return this;
  }
```
----
```Javascript
 emit(eventName/* , ...args*/) {
    const custom = _callbacks[eventName];
    // Number of callbacks.
    let i = custom ? custom.length : 0;
    let len = arguments.length;
    let args;
    let current;

    if (i > 0 && len > 1) {
      args = new Array(len - 1);

      while (len--) {
        if (len === 1) {
          break;
        }
        args[len] = arguments[len];
      }
    }
    while (i--) {
      current = custom[i];

      if (arguments.length > 1) {
        current.callback.call(current.context, args);
      } else {
        current.callback.call(current.context);
      }
    }
    args = null;
    return this;
  }
```
----
- process객체는 Node에 기본 내장겍체로서 어디서든 사용 가능하며 현재 실행중인 Node 프로그램에 대한 정보를 담고 있다.
```Javascript
process.on('exit',()=>{
    console.log("종료");
});
```

----

----
## 간단한 Observer Pattern 예제
1. Observer pattern에 비어있는 코드 작성
2. Observer pattern을 사용하지 않은 예제를 Observer pattern으로 구현
3. [EventEmitter 코드](https://github.com/Zlobin/es-event-emitter)
----
- [참고사이트](https://victorydntmd.tistory.com/296)
- [참고사이트](http://blog.naver.com/PostView.nhn?blogId=c_ist82&logNo=220795909036&parentCategoryNo=&categoryNo=9&viewDate=&isShowPopularPosts=false&from=postView)
- [참고](https://gmlwjd9405.github.io/2018/07/08/observer-pattern.html)

----
