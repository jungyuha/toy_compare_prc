# (4) jest를 활용해 단위테스트 구현

## \[0] 사용 스택 <a href="#undefined" id="undefined"></a>

### **1) 단위테스트 툴 : jest**

## 단위 테스트란? (Unit Test) <a href="#unit-test" id="unit-test"></a>

* 개발한 코드를 원하는 범위의 기능 단위로 테스트하는 것이다.
* 단위테스트는 개발 라이프 사이클의 초기 단계에서 잘못된 부분을 바로 잡아 해결할 수 있기 때문에 추후의 발생될 수 있는 수정비용을 미연에 잡아 줄여준다.

## \[1] Jest 사용하기 <a href="#jest" id="jest"></a>

* facebook에 의해 만들어진 테스팅 프레임워크이다.
* test case를 코드 단위로 만들어서 어플리케이션이 잘 돌아가는지 테스트할 수 있다.

### 1) jest 설치 <a href="#1-jest" id="1-jest"></a>

```
$ npm install jest
```

### 2) jest 셋팅하기 <a href="#2-jest" id="2-jest"></a>

#### 1. package.json에 jest 패키지 추가 및 설정하기 <a href="#1-packagejson-jest" id="1-packagejson-jest"></a>

* dependencies에 jest 패키지를 추가한다.
* scripts의 test부분을 jest로 변경한다.

```json
{
  "name": "compare-prc",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node ./bin/www",
    "dev": "gulp",
    "test": "jest"
  },
  "dependencies": {
    "jest": "^28.1.1"
  }
}
```

#### 2. 테스트 디렉토리 구조 설정하기 <a href="#2" id="2"></a>

*   Spring Junit에서는 다음과 같은 패턴으로 테스트 디렉토리 구조를 설정한다.

    > **✅ Spring Junit에서의 테스트 디렉토리 권장 구조**
    >
    > * 기존 서비스용 소스와 비슷한 구조의 디렉토리 구조로 테스트 소스를 생성한다.
    >   * ex) src/main/java/controller 라는 폴더에 YouRiverController.java 라는 자바 클래스를 생성했다면...\
    >     \==> src/test/java/controller 라는 디렉토리 구조로 YouRiverControllerTest.java 라는 자바 클래스를 만들어주도록 한다.
* Spring Junit의 디렉토리 구조를 기반으로 다음과 같이 테스트 디렉토리를 구성하였다.\
  ![](https://velog.velcdn.com/images/yooha9621/post/3e44b2a7-d9fd-48de-814d-b5d1d5d2ac3b/image.png)

#### 3. 테스트 파일 명명 규칙 <a href="#3" id="3"></a>

**jest에서 테스트할 파일은 다음과 같이 명명한다.(Test 라고 하면 오류난다 test라고 해야한다.)**

#### **4..eslintrc.js 파일 수정**

다음과 같이 **"jest": true** 를 추가해준다.

```javascript
"env": {
        "es6": true,
        "node": true,
        "jest": true 
    }
```

#### 4. 테스트 디렉토리 구조 설정하기 <a href="#2" id="2"></a>

### 3) jest 사용법 <a href="#3-jest" id="3-jest"></a>

#### 1. 단위 테스트 구조 <a href="#1" id="1"></a>

* **단위 테스트 실행 시점**\
  \- 단위 테스트 코드 실행 직전마다 실행\
  \- 단위 테스트 코드 실행\
  \- 단위 테스트 코드 직후마다 실행

#### 2. jest 단위 테스트 구현 메소드 종류 <a href="#2-jest" id="2-jest"></a>

**2-1 ) describe : 테스트 단위 설정(범위 설정)**

* 테스트 단위를 묶는 단위이다.
* 테스트 수행시 describe에 기재된 코드로 테스트 단위를 분류 하면된다.

**2-2 ) beforeEach : 단위 테스트 코드 실행 직전마다 실행**

* test 코드가 실행할 때마다 실행되는 전처리기이다.

**2-3 ) test, it : 단위 테스트 코드 실행**

* 실질적으로 테스트 코드가 수행되는 곳이다.

**2-3 ) afterEach : 단위 테스트 코드 직후마다 실행**

* test 코드가 종료될 때마다 실행되는 후처리기이다.

**2-4 ) toBe, toEqual : 결과 예측에 쓰이는 메소드**

* toBe는 단순 비교를 한다.
* toEqual은 배열이나 객체 내부까지 깊은 비교를 한다.

#### 3. 적용 <a href="#3" id="3"></a>

[출처](https://velog.io/@seongkyun/JEST-%EC%82%AC%EC%9A%A9%EB%B2%95)

```javascript
let temp;
let temp_json;
describe("yooRiver test", () => {
  beforeEach(() => {
    temp = 1;
  });
  
  test('1 is 1', () => {
    expect(1).toBe(1);
  });
  
  test('[1,2,3] is [1,2,3]', () => {
    expect([1,2,3]).toEqual(1);
  });

  afterEach(() => {
    temp = 0;
  });

})
```

**위 소스를 시각화 한 모습**

![](https://velog.velcdn.com/images/yooha9621/post/5b1589ad-b79c-4424-8bdc-67a75c9cf90b/image.png)

### 4) api 호출 단위 테스트 실행 <a href="#4-api" id="4-api"></a>

#### 1. 테스트 소스 작성하기 <a href="#1" id="1"></a>

일단 gettingInfo-service.test.js 파일에 다음과 같이\
간단하게 stockApi를 호출하는 메소드 테스트 소스를 작성했다.

* setTimeout() 함수를 통해 실제로 정보를 받아오는 '척'을 구현했다.
* 비동기 호출은 promise 문으로 구현했다.

```javascript
//	stockx api를 호출한다.
async function stockXApiTest(stockXProdId) {
    var path = 'https://stockx.com/'+stockXProdId;
    var stockXData = new prodObj(); 
    var apiResult = new apiResult_();           
    try {           
        await stockX.fetchProductDetails(path)
        .then(product =>{
            apiResult.res = true;
            stockXData.apiResult = apiResult;
            stockXData.url=path;
            stockXData.name = product.name;
            stockXData.image = product.image;
            stockXData.prdMap = {};
            for (let element of product.variants){
                if(element.market.lowestAsk != null && element.market.lowestAsk > 0 ){
                    var prcInfo = new prcInfo_();
                    prcInfo.size = element.size;
                    prcInfo.lowestAsk =(element.market.lowestAsk != null) ? Number(element.market.lowestAsk) : null ;
                    prcInfo.highestBid = (element.market.highestBid != null) ? Number(element.market.highestBid) : null ;
                    prcInfo.lastSale = (element.market.lastSale != null) ? Number(element.market.lastSale) : null ;
                    stockXData.prdMap[element.size]= prcInfo;
                }
            }
        })
    } catch (err) {
        apiResult.res = false;
        apiResult.msg = "stockXApi Error =>"+err;
        stockXData.apiResult = apiResult;                       
    }
    return stockXData;
}
// 단위 테스트 실행
describe("stockXApiTest", () => {
    test("stockXApiTest", () => {
      try {
        return stockXApiTest('adidas-yeezy-boost-700-magnet')
        .then(async result => {
            var res = JSON.parse(result.body);
            console.log(res);
            return res;
        })
        .catch(e => {
            console.log(" stockXApiTest Error =>"+e);
        });
    } catch (err) {
        console.log(" stockXApiTest Error =>"+err);
    }
      });
  });
```

#### 2. 테스트 실행 <a href="#2" id="2"></a>

```
$ npm run test
```

npm run test를 실행하면 모든 .test.js 파일이 실행된다.

나는 Junit 처럼 구현하고 싶어서 모든 실행파일에 대응하는 테스트 파일을 다 만들어주었기 때문에\
각각의 파일에 테스트 구현이 안되어있다고 'Your test suite must contain at least one test.' 문구와 함께 다음과 같은 오류가 났다.\
![](https://velog.velcdn.com/images/yooha9621/post/f5fc157b-4188-4ce7-84d2-971066b279ba/image.png)\
특정 파일만 테스트할 거니깐 다음과 같이 실행하면 된다.

```
$ npm run test gettingInfo-service.test.js
```

#### 3. 테스트 결과 <a href="#3" id="3"></a>

* 알아둘 것 : await 키워드는 async 함수 내에서만 사용이 가능하다.

**API 호출 결과**

![](https://velog.velcdn.com/images/yooha9621/post/a996e78f-677a-4514-b53e-482faf2ab862/image.png)

**테스트 결과**

![](https://velog.velcdn.com/images/yooha9621/post/321bbb14-e5e2-4701-a421-b88d7785ce3f/image.png)

\
