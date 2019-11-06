---
marp: true
---

# state pattern

---

## state pattern을 사용하는 이유

= if else 다발이 지양되는 이유

---

## If-else의 문제점

=> 유지보수가 어려워진다!

1. 변경, 확장이 될 수록 코드가 복잡해져서 수정할 위치를 찾기가 어렵다.
   ![image](https://user-images.githubusercontent.com/19178129/68128834-d1e40800-ff5b-11e9-90c3-5e9f7c3c8d53.png)

   ![image](https://user-images.githubusercontent.com/19178129/68128883-e9bb8c00-ff5b-11e9-87f0-8ad93337f3ad.png)

---

2. 실수로 추가하지 않고 누락하는 경우가 생긴다.

![image](https://user-images.githubusercontent.com/19178129/68128970-1374b300-ff5c-11e9-80e1-b0d081decf7d.png)

비슷한 논리의 코드를 다른 곳에도 이용하기 위해 복붙하고, 새로운 경우(if)가 추가된다면...?

- 누락
- 코드중복

---

## 또한 if else문 다발 때문에

- 상태 전환이 분명하게 보이지 않음
- 코드를 이해하기도 힘들다...
  등등

---

## ocp의 원칙이 지켜지지 않는다.

OCP는 소프트웨어 구성 요소(컴포넌트, 클래스, 모듈, 함수)는 확장에 대해서는 개방(OPEN)되어야 하지만 변경에 대해서는 폐쇄(CLOSE)되어야 한다는 의미입니다.

![image](https://user-images.githubusercontent.com/19178129/68129217-85e59300-ff5c-11e9-8152-ef1e5217f4f5.png)

---

## 따라서

# 컴포지션을 적용해야 한다.

---

context는 현재 상태와 상태의 인스턴스들을 가지고 있다.
state는 그 상태에서 해야 할 행동들을 가지고 있다.
![](https://i.imgur.com/uxATsSh.png)

---

```
pushPowerBtn() {
    if (this.state === "TURNED_ON") {
      console.log("전원이 꺼집니다!");
      this.state = "TURNED_OFF";
    } else if (this.state === "TURNED_OFF") {
      console.log("절전 모드입니다!");
      this.state = "SAVING_MODE";
    } else if (this.state === "SAVING_MODE") {
      console.log("전원이 켜집니다.");
      this.state = "TURNED_ON";
    }
  }
```

---

### 컨텍스트

실제 행동은 현재 this.state에 맡긴다.

```
class Laptop {
  constructor() {
    this.onState = new OnState(this);
    this.offState = new OffState(this);
    this.savingState = new SavingState(this);

    this.state = this.offState;
  }

  pushPowerBtn() {
    this.state.pushPowerBtn();
    // if (this.state === "TURNED_ON") {
    //   console.log("전원이 꺼집니다!");
    //   this.state = "TURNED_OFF";
    // } else if (this.state === "TURNED_OFF") {
    //   console.log("절전 모드입니다!");
    //   this.state = "SAVING_MODE";
    // } else if (this.state === "SAVING_MODE") {
    //   console.log("전원이 켜집니다.");
    //   this.state = "TURNED_ON";
    // }
  }

  setState(state) {
    this.state = state;
  }
}
```

---

### state들

state 인터페이스는 따로 존재해야!

```
class Off {
  constructor(laptop) {
    this.laptop = laptop;
  }
  pushPowerBtn() {
    console.log("절전 모드로 변경합니다");
    this.laptop.setState(this.laptop.savingState);
  }
}

module.exports = Off;
```

---

# 끝~!~!
