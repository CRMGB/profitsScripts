Script to calculate what stocks are more profitable using Typescript
I'm using Mocha to run the tests.

REQUIREMENTS:
        - Node.js
        - Typescript
        - npm
        - Mocha


Example:
- savings = 250
- current_value = [175,133,109,210,97]
- future_value = [200,125,128,228,133]

To maximise profits, the investor should buy stocks at indices 2 and 4 for an investment of 109 + 97 = 206. At the end of the year the stocks are sold for 128 + 133 = 261, so total profit is 261 - 206 = 55.

Will have the output of:
        55

EXECUTION:
- npm run build
- npm test

EXAMPLE OUTPUT:
> mocha

Call to selectStock took 0.006684005260467529 milliseconds
Call to selectStockWay2 took 0.02319500595331192 milliseconds
Call to selectStockWay3 took 0.005180001258850098 milliseconds


  selectStock test
    ✔ should return 55
    ✔ should return 227

  selectStockWay2 test
    ✔ should return 55
    ✔ should return 227

  selectStockWay3 test
    ✔ should return 55
    ✔ should return 227


  6 passing (8ms)

CONCLUSION:
        I'm using three different ways of looping through the datasets:
                - for (const [index, val] of Object.entries(currentValue)) {
                - for (var key in currentValue) {
                - currentValue.forEach(function (value, index) {
        
        The most efficient and cleaner is 'for (var key in currentValue) {', which is the selectStockWay2, next one would be selectStockWay3 and very closely selectStock.
