# (6) kream api 호출하기(got 라이브러리 사용법)

## \[0] 사용 스택 <a href="#undefined" id="undefined"></a>

### **1)** kream api 호출 **:** got 라이브러리

### 2) 상품 VO 설계 : 👉 [Broken link](broken-reference "mention")

## got 라이브러리 <a href="#got" id="got"></a>

> **✅ got이란?**
>
> * GOT은 Node.js의 외부 Http 라이브러리이다.
> * Node.js의 외부 Http 라이브러리 중에 많이 쓰이는 라이브러리로는 axios , request , superagent 등이 있다.

## \[1] got 설치하기 <a href="#1-got" id="1-got"></a>

got을 설치한다.

```javascript
$ npm install got
```

#### **package.json**

```json
{
  "dependencies": {
    "got": "^12.1.0"
  }
}
```

## \[2] kream api 호출 설정 파일 작성하기 <a href="#2-kream-api" id="2-kream-api"></a>

### 1) kream api를 호출할 설정 파일 생성 <a href="#1-kream-api" id="1-kream-api"></a>

* kream api를 호출할 설정파일을 생성한다.
* src디렉토리 밑의 lib 디렉토리 안에 kream.js 이름으로 생성했다.\
  ![](https://velog.velcdn.com/images/yooha9621/post/d44b8f3f-6156-46b8-b562-eaa9c0fd76b9/image.png)

### 2) got 설정 코드 작성 <a href="#2-got" id="2-got"></a>

**설정 파일 작성 순서**

1. **got 라이브러리 Import**
2. **host 설정**
3. **port 설정**
4. **기타 옵션 설정 ( \[3]번 참고 )**

#### **코드**

```javascript
const got = require('got');
const host = 'kream 호스트 입력';
const port = 80;
const protocol = 'http';

const instance = got.extend({
	prefixUrl: `${protocol}://${host}:${port}`,
	handlers: [
		(options, next) => {
			options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
			return next(options);
		}
	],
	hooks: {
		afterResponse: [
			(response) => {
				return response;
			}
		]
	}
});

module.exports = instance;
```

## \[3] kream Api 호출하기 <a href="#3-kream-api" id="3-kream-api"></a>

### 1) kream api 호출 설정 파일 선언 <a href="#1-kream-api" id="1-kream-api"></a>

* 앞서 작성했던 kream.js 모듈을 선언한다.

```javascript
const kreamApi = require('../../lib/kream');
```

### 2) kream Api 호출하기 <a href="#2-kream-api" id="2-kream-api"></a>

* api 호출을 동기 처리하기위해 **async/await 구문을 활용**했다.
* 호출시 헤더에 x-kream-client-datetime값을 넣어줘야 403에러가 뜨지 않는다.
  * "x-kream-client-datetime": "20230521150611+0900"

```javascript
kreamApi: async(param) => {
    var kreamData = new prodObj(); 
    var apiResult = new apiResult_();      
    var input_prod_id = param.kreamProdId
    let path = 'api/p/products/'+input_prod_id;  
  	// 1. api 호출 옵션 설정 
    let options = {
        method: 'GET',
        path : path,
        scheme : 'https',
        headers: {
            "x-kream-api-version": "18",
            "x-kream-device-id": "web;f3aba727-d1de-4a98-b520-758069ef98b1",
            "x-kream-client-datetime": "20230521150611+0900",
            "authority" :"kream.authority",
            "scheme" : "https",
            "path" : "kream.path",
            "accept": "application/json, text/plain, */*"
        }
    };
    // 2. api 호출 
    return kreamApi(path, options)
    .then(async result => {
      	// 3. 상품정보 VO 맵핑
        var product = JSON.parse(result.body);
        apiResult._res = true;
        kreamData.apiResult = apiResult;
        kreamData.url = "https://kream.co.kr/products/"+input_prod_id;
        kreamData.name = product.release.name;
        kreamData.image = product.release.image_urls[0];
        kreamData.options = product.options;
        kreamData.prdMap = {};
      	// 3-1. 사이즈별 상품정보 VO 맵핑
        for (let element of product.sales_options){
            var prcInfo = new prcInfo_();
            if(element.highest_bid != null || element.lowest_ask != null){
                //4. 최근 가격 조회 서비스 호출
                element.lastSale = await gettingInfoService.kreamLastSaleApi(input_prod_id,element.option);
                prcInfo.size = element.option;
                prcInfo.highestBid = (element.highest_bid != null) ? Number(element.highest_bid) : null ; //   판매가
                prcInfo.lowestAsk = (element.lowest_ask != null) ? Number(element.lowest_ask) : null ; //   구매가
                prcInfo.lastSale = (element.lastSale != null) ? Number(element.lastSale) : null ;                        
                kreamData.prdMap[(element.option).split('(')[0]]= prcInfo;
            }
        }
        return kreamData;
    })
    .catch(e => {
        apiResult.res = false;
        apiResult.msg = "kreamApi Error =>"+e;
        kreamData.apiResult = apiResult;

        return kreamData;
    });
}
```

### 2) kream Api 호출 결과 및 VO 맵핑 <a href="#2-kream-api-vo" id="2-kream-api-vo"></a>

#### **1. 조회 정보**

* 실제 호출한 링크 : [클릭!](https://kream.co.kr/products/21933)
* 빨간색 박스 부분에 기재된 사이즈와 각 가격 정보들을 받아와야한다.
*   각 사이즈 별로 최근 판매 정보도 가져온다.\


    <figure><img src="https://velog.velcdn.com/images/yooha9621/post/4483241f-d451-4024-935e-a336f0afc21b/image.png" alt=""><figcaption></figcaption></figure>

#### **2. 호출 후 VO를 맵핑한 결과 json**

```json
prodObj {
      _url: 'https://kream.co.kr/products/21933',
      _name: 'Adidas Yeezy Boost 700 Magnet',
      _image: 'https://kream-phinf.pstatic.net/MjAyMDEwMjJfMiAg/MDAxNjAzMzMzOTgyMjY1.Va0_vTtH3m9iBh40QUHGMCK4vn6DcP_PkOdEtF0rgXAg.JKL7mmn2rBH5mq8_6-IeMbV29RFVSNTqGpZ8ugTZIhsg.PNG/p_21933_0_6329385d2b754e80a994ae690e1fe346.png',
      _prdMap: {
        '230': prcInfo {
          _size: '230',
          _lowestAsk: 750000,
          _highestBid: null,
          _lastSale: 472000
        },
        '265': prcInfo {
          _size: '265',
          _lowestAsk: 597000,
          _highestBid: 200000,
          _lastSale: 550000
        },
        '270': prcInfo {
          _size: '270',
          _lowestAsk: 540000,
          _highestBid: 200000,
          _lastSale: 550000
        },
        '275': prcInfo {
          _size: '275',
          _lowestAsk: null,
          _highestBid: 220000,
          _lastSale: 539000
        },
        '285': prcInfo {
          _size: '285',
          _lowestAsk: 579000,
          _highestBid: 350000,
          _lastSale: 435000
        },
        '290': prcInfo {
          _size: '290',
          _lowestAsk: 580000,
          _highestBid: 350000,
          _lastSale: 498000
        }
      },
      _options: [
        '220', '225', '230', '235',
        '240', '245', '250', '255',
        '260', '265', '270', '275',
        '280', '285', '290', '295',
        '300', '305', '310', '315',
        '320'
      ],
      _apiResult: apiResult { _res: true, _msg: null }
    }
```

## \[번외] jest 라이브러리 import 오류 <a href="#jest-import" id="jest-import"></a>

단위테스트를 진행하는 도중 오류가 생겼다.\
보아하니 jest에서는 ES6버전의 타입스크립트 구문이 적용되지 않는 문제가 있는 것 같다.\
나는 아래와 같이 해결했다.\
[https://velog.io/@yooha9621/nodejest에서-import가-안되는-오류-해결-방법](https://velog.io/@yooha9621/nodejest%EC%97%90%EC%84%9C-import%EA%B0%80-%EC%95%88%EB%90%98%EB%8A%94-%EC%98%A4%EB%A5%98-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95)
