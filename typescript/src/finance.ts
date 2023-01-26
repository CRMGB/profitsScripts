var startTime = performance.now()

export function selectStock(savings: number, currentValue: number[], futureValue: number[]){
  /**
   * @param savings - The budget to invest
   * @param currentValue - The current value of the stocks
   * @param futureValue - The stimated future value of the stocks
   * @returns the checkProfit result.
   */    
    let result: any = {};
    let sum: any;
    for (const [index, val] of Object.entries(currentValue)) {
        for (const [index_2, val_2] of Object.entries(currentValue)) {
            sum = val + val_2
            if (savings - sum >= 0 && index != index_2){
                result[sum] = [index, index_2]
            }        
        }
    }
    return checkProfit(result, futureValue)
}

function checkProfit(current: any = {}, futureValue: number[]){
  /**
   * @param current - The currentValue sum of each element, checked with the savings and its indexes
   * @param futureValue - The stimated future value of the stocks
   * @returns the max profit calculated.
   */        
    let result: any = []
    for (const [index, val] of Object.entries(current)) {
        let futureProfit:number = futureValue.slice(
            current[index][0])[0] + futureValue.slice(current[index][1]
        )[0];
        result.push(futureProfit - (+index)) //The right-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.
    }
    return result.reduce((a:number, b:number) => Math.max(a, b));
}

var endTime = performance.now()
console.log(`Call to selectStock took ${endTime - startTime} milliseconds`)

var startTime2 = performance.now()
export function selectStockWay2(savings: number, currentValue: number[], futureValue: number[]){
    /**
     * @param savings - The budget to invest
     * @param currentValue - The current value of the stocks
     * @param futureValue - The stimated future value of the stocks
     * @returns the checkProfit result.
     */    
      let result: any = {};
      let sum: any;
      for (var key in currentValue) {
        for (var key_2 in currentValue) {
              sum = currentValue[key] + currentValue[key_2]
              if (savings - sum >= 0 && key != key_2){
                  result[sum] = [key, key_2]
              }        
          }
      }
      return checkProfitWay2(result, futureValue)
  }

function checkProfitWay2(current: any = {}, futureValue: number[]){
    /**
     * @param current - The currentValue sum of each element, checked with the savings and its indexes
     * @param futureValue - The stimated future value of the stocks
     * @returns the max profit calculated.
     */        
      let result: any = []
      for (var key in current) {
          let index:number = futureValue.slice(current[key][0])[0];
          let index2:number = futureValue.slice(current[key][1])[0];
          let futureProfit:number = index + index2
          result.push(futureProfit - (+key)) //The right-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.
      }
      return result.reduce((a:number, b:number) => Math.max(a, b));
  }


  var endTime2 = performance.now()
  console.log(`Call to selectStockWay2 took ${endTime2 - startTime2} milliseconds`)

  var startTime3 = performance.now()
  export function selectStockWay3(savings: number, currentValue: number[], futureValue: number[]){
      /**
       * @param savings - The budget to invest
       * @param currentValue - The current value of the stocks
       * @param futureValue - The stimated future value of the stocks
       * @returns the checkProfit result.
       */    
        let result: any = {};
        let sum: any;
        currentValue.forEach(function (value, index) {
            currentValue.forEach(function (value2, index2) {
                sum = value + value2
                if (savings - sum >= 0 && value != value2){
                    result[sum] = [index, index2]
                }        
            });
        });
        return checkProfitWay3(result, futureValue)
    }
  
  function checkProfitWay3(current: any = {}, futureValue: number[]){
      /**
       * @param current - The currentValue sum of each element, checked with the savings and its indexes
       * @param futureValue - The stimated future value of the stocks
       * @returns the max profit calculated.
       */        
        let result: any = []
        Object.keys(current).forEach(value => {
            let index:number = futureValue.slice(current[value][0])[0];
            let index2:number = futureValue.slice(current[value][1])[0];
            let futureProfit:number = index + index2
            result.push(futureProfit - (+value)) //The right-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.
        });
        return result.reduce((a:number, b:number) => Math.max(a, b));
    }
  
  
    var endTime3 = performance.now()
    console.log(`Call to selectStockWay3 took ${endTime3 - startTime3} milliseconds`)