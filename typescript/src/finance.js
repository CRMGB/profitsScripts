"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectStock = void 0;
var startTime = performance.now();
function selectStock(savings, currentValue, futureValue) {
    let result = {};
    let sum;
    for (const [index, val] of Object.entries(currentValue)) {
        for (const [index_2, val_2] of Object.entries(currentValue)) {
            sum = val + val_2;
            if (savings - sum >= 0 && index != index_2) {
                result[sum] = [index, index_2];
            }
        }
    }
    return checkProfit(result, futureValue);
}
exports.selectStock = selectStock;
function checkProfit(current = {}, futureValue) {
    let result = [];
    for (var key in current) {
        let index = current[key][0];
        let index2 = current[key][1];
        let futureProfit = futureValue.slice(index)[0] + futureValue.slice(index2)[0];
        result.push(futureProfit - (+key)); //The right-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.
    }
    return result.reduce((a, b) => Math.max(a, b));
    // Object.entries(current).forEach((key, value) => {
    // let index:any = value[0];
    // let index2:any = value[1];
    // console.log("index--->", value, "index2--> ", value, "key: ", key)
    // let futureProfit:number = futureValue.slice(index)[0] + futureValue.slice(index2)[0];
    // console.log(futureValue.slice(index), " => ", futureValue.slice(index2));
    // result.push(futureProfit - value)
    // });
    // for (const [index, val] of Object.entries(current)) {
    //     let futureProfit:number = futureValue[index[0]] + futureValue[index[1]]
    //     result.push(futureProfit - val)
    // }
    // return Math.max.apply(result)
}
var endTime = performance.now();
console.log(`Call to doSomething took ${endTime - startTime} milliseconds`);
