"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectStockWay3 = exports.selectStockWay2 = exports.selectStock = void 0;
var startTime = performance.now();
function selectStock(savings, currentValue, futureValue) {
    /**
     * @param savings - The budget to invest
     * @param currentValue - The current value of the stocks
     * @param futureValue - The stimated future value of the stocks
     * @returns the checkProfit result.
     */
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
    /**
     * @param current - The currentValue sum of each element, checked with the savings and its indexes
     * @param futureValue - The stimated future value of the stocks
     * @returns the max profit calculated.
     */
    let result = [];
    for (const [index, val] of Object.entries(current)) {
        let futureProfit = futureValue.slice(current[index][0])[0] + futureValue.slice(current[index][1])[0];
        result.push(futureProfit - (+index)); //The right-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.
    }
    return result.reduce((a, b) => Math.max(a, b));
}
var endTime = performance.now();
console.log(`Call to selectStock took ${endTime - startTime} milliseconds`);
var startTime2 = performance.now();
function selectStockWay2(savings, currentValue, futureValue) {
    /**
     * @param savings - The budget to invest
     * @param currentValue - The current value of the stocks
     * @param futureValue - The stimated future value of the stocks
     * @returns the checkProfit result.
     */
    let result = {};
    let sum;
    for (var key in currentValue) {
        for (var key_2 in currentValue) {
            sum = currentValue[key] + currentValue[key_2];
            if (savings - sum >= 0 && key != key_2) {
                result[sum] = [key, key_2];
            }
        }
    }
    return checkProfitWay2(result, futureValue);
}
exports.selectStockWay2 = selectStockWay2;
function checkProfitWay2(current = {}, futureValue) {
    /**
     * @param current - The currentValue sum of each element, checked with the savings and its indexes
     * @param futureValue - The stimated future value of the stocks
     * @returns the max profit calculated.
     */
    let result = [];
    for (var key in current) {
        let index = futureValue.slice(current[key][0])[0];
        let index2 = futureValue.slice(current[key][1])[0];
        let futureProfit = index + index2;
        result.push(futureProfit - (+key)); //The right-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.
    }
    return result.reduce((a, b) => Math.max(a, b));
}
var endTime2 = performance.now();
console.log(`Call to selectStockWay2 took ${endTime2 - startTime2} milliseconds`);
var startTime3 = performance.now();
function selectStockWay3(savings, currentValue, futureValue) {
    /**
     * @param savings - The budget to invest
     * @param currentValue - The current value of the stocks
     * @param futureValue - The stimated future value of the stocks
     * @returns the checkProfit result.
     */
    let result = {};
    let sum;
    currentValue.forEach(function (value, index) {
        currentValue.forEach(function (value2, index2) {
            sum = value + value2;
            if (savings - sum >= 0 && value != value2) {
                result[sum] = [index, index2];
            }
        });
    });
    return checkProfitWay3(result, futureValue);
}
exports.selectStockWay3 = selectStockWay3;
function checkProfitWay3(current = {}, futureValue) {
    /**
     * @param current - The currentValue sum of each element, checked with the savings and its indexes
     * @param futureValue - The stimated future value of the stocks
     * @returns the max profit calculated.
     */
    let result = [];
    Object.keys(current).forEach(value => {
        let index = futureValue.slice(current[value][0])[0];
        let index2 = futureValue.slice(current[value][1])[0];
        let futureProfit = index + index2;
        result.push(futureProfit - (+value)); //The right-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.
    });
    return result.reduce((a, b) => Math.max(a, b));
}
var endTime3 = performance.now();
console.log(`Call to selectStockWay3 took ${endTime3 - startTime3} milliseconds`);
