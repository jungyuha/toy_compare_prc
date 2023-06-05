# \[javascript]class 생성 , getter setter 적용하기

## \[1] 클래스 기본 코드 형식 <a href="#1" id="1"></a>

```javascript
class 클래스명{
    // 생성자 --> 멤버변수 선언 , 기타 초기화
    // getter, setter
    // 메서드
}
```

## \[2] 클래스를 통해 객체 생성하기 <a href="#2" id="2"></a>

* new 예약어를 사용한다.

```javascript
var|let|const 변수이름 = new 클래스이름();
```

* 일반적으로 JS에서 객체를 생성할 때 const 키워드를 사용한다.
* 객체의 내부 요소는 점(.)을 통해 접근할 수 있다.
  * 객체.멤버변수 = 값;
  * 객체.메서드();

## \[3] 클래스의 패턴 3가지 <a href="#3-3" id="3-3"></a>

1. **변수만** 정의한 클래스
2. **메서드만** 정의한 클래스
3. **변수와 메서드를 함께** 정의한 클래스

### 1) 변수만 정의한 클래스 <a href="#1" id="1"></a>

* 생성자 함수를 정의하고 생성자 함수 안에서 **this** 키워드를 통해 객체 안에 선언할 변수들을 생성한다.
* 생성자 함수명은 constructor로 미리 정의되어 있다.

```javascript
class ProductClass{
    constructor(){
        this.prodName = "상품이름";
        this.prodNo = "상품번호";
    }
}

var p1 = new ProductClass();
console.log(p1);
console.log(p1.prodName);
console.log(p1.prodNo);

var p2 = new ProductClass();
console.log(p2);
console.log(p2.prodName);
console.log(p2.prodNo);

p1.prodName = "상품1";
p1.prodNo = "123";

p2.prodName = "상품2";
p2.prodNo = "124";

console.log(p1);
console.log(p2);

// 콘솔 결과
ProductClass { prodName: '상품이름', prodNo: '상품번호' }
상품이름
상품번호
ProductClass { prodName: '상품이름', prodNo: '상품번호' }
상품이름
상품번호
ProductClass { prodName: '상품1', prodNo: '123' }
ProductClass { prodName: '상품2', prodNo: '124' }
```

### 2) 메서드만 정의한 클래스 <a href="#2" id="2"></a>

```javascript
class Calc {
    plus(x,y){
    return x+y;
    }
    minus(x,y){
        return x-y;
    }    
}

var c1 = new Calc();
console.log(c1.plus(1,2));
console.log(c1.minus(10,5));

// 콘솔 결과
3
5
```

### 3) 변수와 메서드를 함께 정의한 클래스 <a href="#3" id="3"></a>

```javascript
class HelloWorld{
    constructor(){
        // 멤버변수 정의
        this.message = null;
    }

    sayHello() {console.log(this.message);}
    setEng() { this.message = "Hello";}
    setKor() {this.message =  "안녕하세요.";}
}

const hello = new HelloWorld();

//메서드 호출
hello.setEng();
hello.sayHello();
hello.setKor();
hello.sayHello();

//콘솔 결과
Hello
안녕하세요.
```

## \[4] 클래스에 getter,setter 적용하기 <a href="#4-gettersetter" id="4-gettersetter"></a>

```javascript
module.exports =  class prcInfo {
    constructor(){
        this._size = null;
        this._lowestAsk = null;
        this._highestBid = null;
        this._lastSale = null;
    }
    set size(value){
        if(!value){
            console.log("size 입력하세요.");
            return;
        }
        this._size = value;
    }

    set lowestAsk(value){
        if(!value){
            console.log("lowestAsk 입력하세요.");
            return ;
        }
        this._lowestAsk = value;
    }

    set highestBid(value){
        if(!value){
            console.log("highestBid 입력하세요.");
            return;
        }
        this._highestBid = value;
    }

    set lastSale(value){
        if(!value){
            console.log("lastSale 입력하세요.");
            return ;
        }
        this._lastSale = value;
    }

    get size(){
        return this._size;
    }

    get lowestAsk(){
        return this._lowestAsk;
    }

    get highestBid(){
        return this._highestBid;
    }

    get lastSale(){
        return this._lastSale;
    }
}

const prcInfo1 = new prcInfo();

prcInfo1.size = "5.5";
prcInfo1.lowestAsk = 909000;
prcInfo1.highestBid = 354000;
prcInfo1.lastSale = 537000;

console.log(prcInfo1);

//콘솔 결과
prcInfo {
      _size: '5.5',
      _lowestAsk: 909000,
      _highestBid: 354000,
      _lastSale: 537000
    }
```
