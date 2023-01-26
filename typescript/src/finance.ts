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
    for (var key in current) {
        let index:number = current[key][0];
        let index2:number = current[key][1];
        let futureProfit:number = futureValue.slice(index)[0] + futureValue.slice(index2)[0];
        result.push(futureProfit - (+key)) //The right-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.
    }
    return result.reduce((a:number, b:number) => Math.max(a, b));
}

var endTime = performance.now()
console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)