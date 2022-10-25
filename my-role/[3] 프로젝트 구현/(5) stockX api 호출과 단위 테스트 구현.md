# (5) stockX api 호출하기

## \[0] 사용 스택 <a href="#undefined" id="undefined"></a>

### **1)** stockX api 호출 **:** stockX api 라이브러리

## stockX api 호출 <a href="#stockx-api" id="stockx-api"></a>

* stockX 에서 현재 판매중인 특정 상품의 가격 정보와 판매 관련 정보가 필요하다.

## 1. stockX api 라이브러리 설치 <a href="#1-stockx-api" id="1-stockx-api"></a>

```
$ npm install stockx-api
```

* 다음 링크는 stockX api 깃허브 저장소이다!\
  [https://github.com/matthew1232/stockx-api](https://github.com/matthew1232/stockx-api)

stockX-api 라이브러리가 설치된 것을 확인할 수 있다.

#### **package.json**

```json
{
  "dependencies": {
    "stockx-api": "^1.1.0"
  }
}
```

## 2. stockX api 호출하기 <a href="#2-stockx-api" id="2-stockx-api"></a>

### 1) stockX api 임포트 <a href="#1-stockx-api" id="1-stockx-api"></a>

* 한국 가격 정보를 가져올 수 있도록 화폐를 'KRW'으로 설정한다.

```javascript
const StockXAPI = require('stockx-api');
const stockX = new StockXAPI({currency: 'KRW'});
```

### 2) stockX api 호출 코드 작성 <a href="#2-stockx-api" id="2-stockx-api"></a>

```javascript
	stockXApi: async(param) => {
      // 1 . 호출 URL 설정
        var path = 'https://stockx.com/'+param.stockXProdId;
        var stockXData = new prodObj();  // 상품 정보 VO
        var apiResult = new apiResult_();  // api 호출 결과 VO         
        try {           
            // 2. api 호출
            await stockX.fetchProductDetails(path)
            .then(product =>{
              	// 3. 상품 정보 VO 맵핑
                apiResult.res = true;
                stockXData.apiResult = apiResult;
                stockXData.url=path;
                stockXData.name = product.name;
                stockXData.image = product.image;
                stockXData.prdMap = {};
              	// 3-1. 사이즈별 상품 정보 VO 맵핑
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
```

### 3) stockX api 호출 결과 <a href="#3-stockx-api" id="3-stockx-api"></a>

**1. 조회 정보**

* 실제 호출한 링크 : [클릭!](https://stockx.com/ko-kr/nike-air-force-1-low-white-navy-grey)
* 빨간색 박스 부분에 기재된 사이즈와 각 가격 정보들을 받아와야한다.
*   각 사이즈 별로 최근 판매 정보도 가져온다.\


    <figure><img src="https://velog.velcdn.com/images/yooha9621/post/479c128d-ece3-4fc4-b642-d14bfb941797/image.png" alt=""><figcaption></figcaption></figure>

![](https://velog.velcdn.com/images/yooha9621/post/ed694381-ec0e-4d9c-8afa-5e60f9428d57/image.png)

#### **2. 호출 후 VO를 맵핑한 결과 json**

```json
    prodObj {
      _url: 'https://stockx.com/adidas-yeezy-boost-700-magnet',
      _name: 'adidas Yeezy Boost 700',
      _image: 'https://images.stockx.com/images/adidas-Yeezy-Boost-700-Magnet-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1606324226',
      _prdMap: {
        '4': prcInfo {
          _size: '4',
          _lowestAsk: 939000,
          _highestBid: 336000,
          _lastSale: 968000
        },
        '5': prcInfo {
          _size: '5',
          _lowestAsk: 656000,
          _highestBid: 346000,
          _lastSale: 694000
        },
        '6': prcInfo {
          _size: '6',
          _lowestAsk: 764000,
          _highestBid: 408000,
          _lastSale: 777000
        },
        '7': prcInfo {
          _size: '7',
          _lowestAsk: 809000,
          _highestBid: 505000,
          _lastSale: 1066000
        },
        '8': prcInfo {
          _size: '8',
          _lowestAsk: 860000,
          _highestBid: 443000,
          _lastSale: 910000
        },
        '9': prcInfo {
          _size: '9',
          _lowestAsk: 744000,
          _highestBid: 635000,
          _lastSale: 753000
        },
        '10': prcInfo {
          _size: '10',
          _lowestAsk: 780000,
          _highestBid: 551000,
          _lastSale: 600000
        },
        '11': prcInfo {
          _size: '11',
          _lowestAsk: 960000,
          _highestBid: 591000,
          _lastSale: 874000
        },
        '12': prcInfo {
          _size: '12',
          _lowestAsk: 865000,
          _highestBid: 577000,
          _lastSale: 592000
        },
        '13': prcInfo {
          _size: '13',
          _lowestAsk: 1007000,
          _highestBid: 506000,
          _lastSale: 614000
        },
        '14': prcInfo {
          _size: '14',
          _lowestAsk: 896000,
          _highestBid: 577000,
          _lastSale: 2223000
        },
        '15': prcInfo {
          _size: '15',
          _lowestAsk: 1306000,
          _highestBid: 649000,
          _lastSale: 650000
        },
        '16': prcInfo {
          _size: '16',
          _lowestAsk: 1441000,
          _highestBid: 508000,
          _lastSale: 831000
        },
        '4.5': prcInfo {
          _size: '4.5',
          _lowestAsk: 784000,
          _highestBid: 347000,
          _lastSale: 800000
        },
        '5.5': prcInfo {
          _size: '5.5',
          _lowestAsk: 952000,
          _highestBid: 369000,
          _lastSale: 562000
        },
        '6.5': prcInfo {
          _size: '6.5',
          _lowestAsk: 1394000,
          _highestBid: 401000,
          _lastSale: 1203000
        },
        '7.5': prcInfo {
          _size: '7.5',
          _lowestAsk: 865000,
          _highestBid: 405000,
          _lastSale: 890000
        },
        '8.5': prcInfo {
          _size: '8.5',
          _lowestAsk: 880000,
          _highestBid: 509000,
          _lastSale: 1119000
        },
        '9.5': prcInfo {
          _size: '9.5',
          _lowestAsk: 1001000,
          _highestBid: 456000,
          _lastSale: 722000
        },
        '10.5': prcInfo {
          _size: '10.5',
          _lowestAsk: 831000,
          _highestBid: 551000,
          _lastSale: 779000
        },
        '11.5': prcInfo {
          _size: '11.5',
          _lowestAsk: 939000,
          _highestBid: 577000,
          _lastSale: 837000
        },
        '12.5': prcInfo {
          _size: '12.5',
          _lowestAsk: 1183000,
          _highestBid: 462000,
          _lastSale: 1083000
        }
      },
      _options: null,
      _apiResult: apiResult { _res: true, _msg: null }
    }
```
