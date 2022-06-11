const kreamApi = require('../lib/kream');
const StockXAPI = require('stockx-api');
const logger =  require('../modules/logger');
const stockX = new StockXAPI({currency: 'KRW'});
const gettingInfoService = {
	stockXApi: async(input_prod_id) => {
        try {
            var stockXData = {};
            var path = 'https://stockx.com/'+input_prod_id;
            await stockX.fetchProductDetails(path)
            .then(product =>{
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
            })
            return stockXData;
        } catch (err) {
            logger.info(stockXData.name+" :stockXApi Error =>"+err);
            throw Error(err)
        }
	},
	kreamApi: async(input_prod_id) => {
        try {kreamApi
            var kreamData = {};
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
                        element.lastSale = await gettingInfoService.kreamLastSaleApi(input_prod_id,element.option);
                        kreamData.prdMap[(element.option).split('(')[0]]={
                            size : element.option,
                            highest_bid : element.highest_bid,
                            lastSale : element.lastSale
                        };
                    }
                }
                return kreamData;
            })
            .catch(e => {
                logger.info(kreamData.name+" :kreamApi Error =>"+e);
                throw Error(e);
            });
        } catch (err) {
            logger.info(kreamData.name+" :kreamApi Error =>"+err);
            throw Error(err)
        }
	},
    kreamLastSaleApi: async (input_prod_id,size) => {
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
                logger.info("kreamLastPrcApi Error =>"+e);
                throw Error(e)
            });
        } catch (err) {
            logger.info("kreamLastPrcApi Error =>"+err);
            throw Error(err)
        }
	}
};
module.exports = gettingInfoService;