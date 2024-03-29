# 클래스 다이어그램 작성법

## 클래스 간 관계

<figure><img src="../../.gitbook/assets/image (5) (1) (1) (1).png" alt=""><figcaption><p>클래스 간 관계</p></figcaption></figure>

출처 : [https://www.nextree.co.kr/p6753/](https://www.nextree.co.kr/p6753/\))

<figure><img src="../../.gitbook/assets/image (10) (1).png" alt=""><figcaption><p>클래스 간 관계</p></figcaption></figure>

출처 : [https://gmlwjd9405.github.io/2018/07/04/class-diagram.html](https://gmlwjd9405.github.io/2018/07/04/class-diagram.html)

## 1. 일반화 관계

<figure><img src="../../.gitbook/assets/image (6) (1) (1).png" alt=""><figcaption><p>일반화 관계</p></figcaption></figure>

* 한 클래스가 다른 클래스를 포함하는 상위 개념일 때
* 객체지향 개념에서는 일반화 관계를 상속 관계(“is a kind of” 관계) 라고 함
* 부모 클래스는 자식 클래스의 공통 속성이나 연산을 제공하는 틀

## 2. 집합 관계

<figure><img src="../../.gitbook/assets/image (1) (2) (1) (1).png" alt=""><figcaption><p>집합 관계</p></figcaption></figure>

* 부모 클래스는 자식 클래스의 공통 속성이나 연산을 제공하는 틀&#x20;

### (1) 집약 관계(aggregation)&#x20;

* 한 객체가 다른 객체를 포함하는 것
* ‘부분’을 나타내는 객체를 다른 객체와 공유할 수 있다.
* ‘전체’를 가리키는 클래스 방향에 빈 마름모로 표시 전체 객체의 라이프타임과 부분 객체의 라이프 타임은 독립적이다.
* 전체 객체가 메모리에서 사라진다 해도 부분 객체는 사라지지 않는다.&#x20;
* 의존 관계에 포함됨

### (2) 합성 관계(composition)

* 부분 객체가 전체 객체에 속하는 관
* ‘부분’을 나타내는 객체를 다른 객체와 공유할 수 없다.
* ‘전체’를 가리키는 클래스 방향에 채워진 마름모로 표시 전체 객체의 라이프타임과 부분 객체의 라이프 타임은 의존적이다.
* 전체 객체가 없어지면 부분 객체도 없어진다.&#x20;
* 의존 관계에 포함됨

## 3. 의존 관계

<figure><img src="../../.gitbook/assets/image (4) (1) (1).png" alt=""><figcaption></figcaption></figure>

* 일반적으로 한 클래스가 다른 클래스를 사용하는 경우
* 클래스의 속성(“멤버 변수”)에서 참조할 때
* 연산의 “인자”(참조값)로 사용될 때
* 메서드 내부의 “지역 객체”로 참조될 때
* 짧은 시간 동안 이용하는 관계
* UML에서는 점선으로 나타낸다.
* 예를 들어, 자동차(Car)와 주유기(GasPump)의 관계&#x20;
