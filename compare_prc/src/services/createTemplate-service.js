var sizeMap1 = require('../vo/sizeMap1');  
var sizeMap2 = require('../vo/sizeMap2'); 
var sizeMap3 = require('../vo/sizeMap3'); 
var sizeMap4 = require('../vo/sizeMap4'); 
const msgInfo_ = require('../vo/msgInfo');
const msgTemplate_ = require('../vo/msgTemplate');

const createTemplateService = {

    procOriginVals: async(stockXData,kreamData,templateInfo) => {
        var msgTemplate = new msgTemplate_();
        msgTemplate.msgInfoMap = {};
        var sizeMap=sizeMap1;
            if(Object.keys(stockXData.prdMap)[0]!=null){
                if((Object.keys(stockXData.prdMap)[0].toString()).includes('W')){
                    sizeMap=sizeMap2;
                }
                else if((Object.keys(stockXData.prdMap)[0].toString()).includes('Y')){
                    sizeMap=sizeMap3;
                }
                else if('XXSMXXL'.includes((Object.keys(stockXData.prdMap)[0].toString()))){
                    sizeMap=sizeMap4;
                }
            }
            templateInfo.sizeMap = sizeMap;
            let exchange = templateInfo.exchange > 0 ? Number(templateInfo.exchange) : 1350 ;
            let deliveryFeeToUs = (templateInfo.deliveryFeeToUs > 0) ? Number(templateInfo.deliveryFeeToUs) : 0 ;
            let deliveryFeeToKr = (templateInfo.deliveryFeeToKr > 0) ? Number(templateInfo.deliveryFeeToKr) : 0;

            msgTemplate.exchange = exchange;
            msgTemplate.deliveryFeeToUs = deliveryFeeToUs;
            msgTemplate.deliveryFeeToKr =  parseInt(deliveryFeeToKr*exchange);

            for(const [ key, value ] of Object.entries(stockXData.prdMap)){
                if(kreamData.prdMap[sizeMap[key]]!=null){ // 1. 동일 사이즈 맵핑
                    const msgInfo = new msgInfo_();
                    msgInfo.setMsgInfoDefault(
                        kreamData.prdMap[sizeMap[key]].highestBid,
                        kreamData.prdMap[sizeMap[key]].lowestAsk,
                        parseInt(Number(kreamData.prdMap[sizeMap[key]].lastSale)),
                        value.highestBid,
                        value.lowestAsk,
                        parseInt(Number(value.lastSale)),
                        deliveryFeeToUs,
                        deliveryFeeToKr,
                        exchange);
                    msgInfo.setMsgInfoElement();    
                    
                    msgInfo.msg = 
                        "환율 : " + exchange + " | "
                        + "사이즈 : " + key +"("+sizeMap[key]+")" + " | "
                        + "stockX 최종 구매가(최근 최종 구매가) : " + msgInfo.us_final_buy_prc + "("+ msgInfo.us_final_buy_latest_prc+")" + " | "
                        + "kream 최종 판매가(최근 최종 판매가) : " + msgInfo.kr_final_sell_prc + "("+msgInfo._kr_final_sell_latest_prc+")" + " | "
                        + "미국 => 한국 차액 : " + msgInfo.usToKr_prc_diff + " | "
                        + "kream 최종 구매가(최근 최종 구매가) : " + msgInfo.kr_final_buy_prc + "("+msgInfo.kr_final_buy_latest_prc+")" + " | "
                        + "stockX 최종 판매가(최근 최종 판매가) : " + msgInfo.us_final_sell_prc + "("+msgInfo._kr_final_buy_latest_prc+")" + " | "
                    ;
                    msgInfo.title = "US " + key +" ("+sizeMap[key]+")"
                    msgInfo.kr_size = sizeMap[key];
                    msgInfo.krToUs_msg =
                        "kream 구매가(직전가) :" +createTemplateService.moneyComma(msgInfo.kr_final_buy_prc) + "("+ createTemplateService.moneyComma(msgInfo.kr_final_buy_latest_prc)+")"+ "\n"
                        +"stockX 판매가(직전가) : "+ createTemplateService.moneyComma(msgInfo.us_final_sell_prc) + "("+ createTemplateService.moneyComma(msgInfo.us_final_sell_latest_prc)+")" +"\n" 
                        + "차액(직전가 차액) : " +createTemplateService.moneyComma(msgInfo.krToUs_prc_diff) + "("+ createTemplateService.moneyComma(msgInfo.krToUs_latest_prc_diff)+")"+ "\n"
                        + "roi(직전가 roi) : " +createTemplateService.roiToString(msgInfo.krToUs_prc_roi)+ "("+ createTemplateService.roiToString(msgInfo.krToUs_latest_prc_roi)+")"+ "\n";
                    msgInfo.usToKr_msg = 
                    "stockX 구매가(직전가) :" +createTemplateService.moneyComma(msgInfo.us_final_buy_prc) + "("+ createTemplateService.moneyComma(msgInfo.us_final_buy_latest_prc)+")"+ "\n"
                    + "kream 판매가(직전가) : "+ createTemplateService.moneyComma(msgInfo.kr_final_sell_prc) + "("+ createTemplateService.moneyComma(msgInfo.kr_final_sell_latest_prc)+")" +"\n"
                    + "차액(직전가 차액) : " +createTemplateService.moneyComma(msgInfo.usToKr_prc_diff) + "("+ createTemplateService.moneyComma(msgInfo.usToKr_latest_prc_diff)+")"+ "\n"
                    + "roi(직전가 roi) : " +createTemplateService.roiToString(msgInfo.usToKr_prc_roi)+ "("+ createTemplateService.roiToString(msgInfo.usToKr_latest_prc_roi)+")"+ "\n";

                    msgTemplate.msgInfoMap[key]=msgInfo;
                    }                     
                }
                return msgTemplate;
            },
    moneyComma : (money) => {
        var res;
        if (money == null){
            res = null ;
        }
        else {
            res = "₩"+money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        } 
        return res;
    },
    roiToString : (roi) => {
        var res;
        if (roi == null){
            res = null ;
        }
        else {
            res = roi.toString()+"%";
        } 
        return res;
    }
};

module.exports = createTemplateService;

