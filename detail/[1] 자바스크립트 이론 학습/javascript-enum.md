# \[javascript] enum 사용하기

## \[1] enum 특징 <a href="#1-enum" id="1-enum"></a>

* key , value 값을 가진 상수들을 모아놓고 사용하기 위해서 사용한다.
* 열거형 타입이라고도 한다.

## \[2] enum 활용 예시 <a href="#2-enum" id="2-enum"></a>

```javascript
const Season {
  SPRING : "spring" ,
  SUMMER : "summer" ,
  AUTUMN : "autumn" ,
  WINTER : "winter"
};
Object.freeze(Season); // 객체를 동결시키기 위함

console.log(Season.SPRING);
```
