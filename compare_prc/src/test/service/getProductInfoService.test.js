
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

  let temp ;
  describe("stockXApiTest", () => {
    test("stockXApiTest", () => {
        var stockXData = {};
        var input_prod_id = 'test';
        var path = 'https://stockx.com/'+input_prod_id;
        fetchStockXProductDetailsTest(path)
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
                return stockXData;
            })
            .then((result)=>{
                console.log("test result ::: "+JSON.stringify(result));
            });
      });
  });