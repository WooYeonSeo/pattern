---
marp: true
---

# 템플릿 메소드 패턴

---

- 어떤 작업을 처리하는 일부분을 서브클래스로 캡슐화해 전체 일을 수행하는 구조

- 바꾸지 않으면서 특정 단계에서 수행하는 내역을 바꾸는 패턴

- 템플릿 클래스는 알고리즘의 일부만 구현하고 다른 부분은 나중에 다른 클래스에서 이 부분을 재정의하여 확장할 수 있도록 추상영역에 남기게 된다

- 큰 틀은 유지하면서 다른 부분만 각 객체에서 구현하도록 할 때 템플릿 메서드 패턴이 유용하다.

---

![](template.png)

----
AbstractClass

- 템플릿 메서드를 정의하는 클래스
- 하위 클래스에 공통 알고리즘을 적용하고 하위클래스에서 구현될 기능을 primitive(hook) 메서드 등으로 정의하는 클래스

ConcreteClass

- 상위 클래스에서 구현된 템플릿 메서드의 알고리즘에서 하위 클래스에 적합하게 primitive(hook) 메서드를 오버라이드 하는 클래스
---
Hook 이란 ?

- 추상 클래스에 들어있는, 아무 일도 하지 않거나 기본 행동을 정의하는 메서드
- 서브 클래스에서 오버라이드 해서 사용이 가능하다.
----
```Typescript
    abstract class IntroduceTemplate{
        name : String;
        age : Number;
        constructor(name:String,age:Number){
            this.name = name;
            this.age = age;
        }
        introduceOneself():void{
            this.sayName();
            this.sayAge();
            this.saySpecialty();
            this.sayMessage();
        }
        /**
         * 이름과 나이는 말하는 방법이 정해져있음
         */
        sayName():void{
            console.log(`안녕하십니까? 저는 ${this.name} 입니다.`)
        }
        sayAge():void{
            console.log(`저의 나이는 ${this.age} 입니다.`);
        }
        /** hook method
         *  필요에 따라서 오버라이드 해도되고 안해도된다.
         */
        saySpecialty():void{
    
        }
        /**
         * abstract Method : 무조건 구현해야하는 메소드
         */
        abstract sayMessage():void;
    }
```
----
```Typescript
    class Youngsu extends IntroduceTemplate{
        constructor(name:String,age:Number){
            super(name,age);
        }
        saySpecialty():void{
            console.log(`저는 무엇이든 시키면 잘 할 수 있습니다!!!`);
        }
        sayMessage():void{
            console.log("회사에 들어오면 열심히 하겠습니다!! (패턴스터디 화이팅!!)")
        }
    }
```
---

### 템플릿 메서드로 얻을 수 있는것

- 분산되어 있던 동일한 알고리즘을 합침
- 여러 서브 클래스의 중복된 코드들을 재사용할 수 있다.
- 알고리즘이 한군데 모여있어 수정이 필요하면 그곳만 고치면된다.
- 서브 클래스에서 일부만 구현하면 된다.
- 유의해야 할 점
    - 상속을 사용하기 떄문에 부모 클래스와 강하게 결합이 되어 있다.