---
marp: true
---

# 컴포지트 패턴

---

## 구조(structural) 패턴

구조 패턴은 **객체 구성**에 관한 패턴이다.

`구조 클래스(class) 패턴`: 이해 관계자들과 작업한다.

`구조 객체(object) 패턴`: 조각들을 함께 묶는다.(composite pattern)

---

## 컴포지트 패턴 (Composite Pattern)

컴포지트 패턴은 간단하게 말해 단일 객체(Single Instance)든 객체들의 집합(Group of Instance)이든 같은 방법으로 취급하는 것이다. 다시 말해, 개별적인 객체들과 객체들의 집합간의 처리 방법의 차이가 없을 경우 사용한다. 여기서 컴포지트(합성:Composite)의 객체들의 관계를 트리 구조로 구성하여 부분-전체 계층을 표현하는 것이다.

> 하나의 인터페이스로 모든 것을 만들어버리자

---

### 예를들어

```javascript
// Single elements
$("#singleItem").addClass("active");
$("#container").addClass("active");

// Collections of elements
$("div").addClass("active");
$(".item").addClass("active");
$("input").addClass("active");
```

---

## 참여 객체

컴포지트 패턴 구현에 참여하는 객체는 다음과 같다.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Composite_UML_class_diagram_%28fixed%29.svg/480px-Composite_UML_class_diagram_%28fixed%29.svg.png)

---

- Component
  - 모든 표현할 요소들의 추상적인 인터페이스
  - interface 또는 abstract class, 약간의 공통 메소드 역시 포함된다.
- Leaf
  - Component로 지정된 인터페이스를 구현한 것.
  - leaf 클래스에서는 원시 component 외의 다른 컴포넌트를 섞지 않는다.
- Composite
  - Component 요소를 자식으로 가진다.
  - Component요소를 관리하기 위한 메소드를 추가적으로 구현한다.
- Client
  - 컴포지트와 해당 컴포넌트를 처리한다.

---

## 활용 범위

객체가 트리 구조를 구성하는 컴포넌트로 재귀적 추출 될 수 있는 경우에 적용한다.
ex) DOM 트리, 파일 구조 트리

---

## 결론

- 베이스 컴포넌트 객체와 컴포지트 객체 모두 인터페이스를 공유하므로 구조를 쉽게 구축할 수 있다.
- 컴포넌트를 재귀적으로 렌더링할 수 있다.
- 컴포넌트는 자식, 부모 컴포넌트를 가질 수 있으므로 유기적으로 동작하는 새로운 컴포넌트를 쉽게 생성할 수 있다.

---

## 참고

https://jdm.kr/blog/228
https://x-team.com/blog/understanding-the-composite-pattern/
https://www.oreilly.com/library/view/learning-javascript-design/9781449334840/ch12s01.html
