const StockXAPI = require('stockx-api');
const stockX = new StockXAPI({currency: 'KRW'});
const kreamApi = require('../../lib/kream');

function fetchStockXProductDetailsTest(id) {
    if (id == null || id == "" ) throw new Error("Invalid ID");
    console.log("id :: "+id);
    var product ;
    return new Promise((resolve) => {
        setTimeout(() => {
          console.log("wait 3 sec.");
          product = {
            name: 'nameTest',
            image: 'imageTest',
            pid: 'pidTest',
            variants : [
                {
                    market : { lowestAsk : 1000 , lastSale : 2000 },
                    size : 235
                },
                {
                  market : { lowestAsk : 2000 , lastSale : 3000 },
                  size : 240
                },
                {
                  market : { lowestAsk : 3000 , lastSale : 4000 },
                  size : 245
                } 
            ]
          };
          console.log(JSON.stringify(product));
          resolve(product);
        }, 3000);
      });
  }

  async function kreamLastSaleApi(input_prod_id,size) {
    try {
      let path = 'api/p/products/'+input_prod_id+'/'+size;
      let options = {
          method: 'GET',
          path : '/api/p/products/'+input_prod_id+'/'+size,
          scheme : 'https',
          headers: {
              "x-kream-api-version": "6",
              "x-kream-device-id": "web;49c40756-3bab-4ad2-8b69-130cac43456a",
              "authority" :"kream.co.kr",
              "scheme" : "https",
              "path" : "/api/p/products/"+input_prod_id,
              "accept": "application/json, text/plain, */*",
              "accept-encoding" : "gzip, deflate, br",
              "referer" : "https://kream.co.kr/",
              "accept-language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
              "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
              "sec-ch-ua-mobile": "?0",
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "cors",
              "sec-fetch-site": "same-origin",
              "sec-fetch-user": "?1",
              "upgrade-insecure-requests": "1"
          }
      };
      return kreamApi(path, options)
      .then(result => {
          var product = JSON.parse(result.body);
          var latestPrc = product.market.last_sale_price;
          return latestPrc;
      })
      .catch(e => {
          console.log("kreamLastPrcApi Error =>"+e);
          throw Error(e)
      });
  } catch (err) {
      console.log("kreamLastPrcApi Error =>"+err);
      throw Error(err)
  }
  }
  /*
  describe("stockXApiTest", () => {
    test("stockXApiTest", () => {
        var stockXData = {};
        var input_prod_id = 'nike-air-force-1-low-white-navy-grey';
        var path = 'https://stockx.com/'+input_prod_id;
        stockX.fetchProductDetails(path)
            .then(product =>{
               console.log(product);
                stockXData.stockXUrl=path;
                stockXData.name = product.name;
                stockXData.image = product.image;
                stockXData.pid = product.pid;
                stockXData.prdMap = {};
                for (let element of product.variants){
                    if(element.market.lowestAsk != null && element.market.lowestAsk > 0 ){
                        stockXData.prdMap[element.size]={
                            size : element.size,
                            lowestAsk : parseInt(Number(element.market.lowestAsk)*1.045)+20000,
                            lastSale : parseInt(Number(element.market.lastSale)*1.045)+20000,
                        };
                    }
                }
                return stockXData;
            })
            .then((result)=>{
                console.log("test result ::: "+JSON.stringify(result));
            });
      });
  });*/
  
  describe("kreamApiTest", () => {
    test("kreamApiTest", () => {
      try {
        var kreamData = {};
        let input_prod_id = 64629;
        let path = 'api/p/products/'+input_prod_id;
        let options = {
            method: 'GET',
            path : path,
            scheme : 'https',
            headers: {
                "x-kream-api-version": "6",
                "x-kream-device-id": "web;49c40756-3bab-4ad2-8b69-130cac43456a",
                "authority" :"kream.co.kr",
                "scheme" : "https",
                "path" : "/api/p/products/"+input_prod_id,
                "accept": "application/json, text/plain, */*",
                "accept-encoding" : "gzip, deflate, br",
                "referer" : "https://kream.co.kr/",
                "accept-language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
                "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "sec-fetch-user": "?1",
                "upgrade-insecure-requests": "1"
            }
        };
        return kreamApi(path, options)
        .then(async result => {
            var product = JSON.parse(result.body);
            kreamData.kreamUrl = "https://kream.co.kr/products/"+input_prod_id;
            kreamData.name = product.release.name;
            kreamData.image = product.release.image_urls[0];
            kreamData.options = product.options;
            kreamData.prdMap = {};
            
            for (let element of product.sales_options){
                if(element.highest_bid != null){
                    //latestprc 서비스 호출
                    element.lastSale = await kreamLastSaleApi(input_prod_id,element.option);
                    kreamData.prdMap[(element.option).split('(')[0]]={
                        size : element.option,
                        highest_bid : element.highest_bid,
                        lastSale : element.lastSale
                    };
                }
            }
            console.log(kreamData);
            return kreamData;
        })
        .catch(e => {
            console.log(kreamData.name+" :kreamApi Error =>"+e);
            throw Error(e);
        });
    } catch (err) {
        console.log(kreamData.name+" :kreamApi Error =>"+err);
        throw Error(err)
    }
      });
  });