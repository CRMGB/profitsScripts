Script to calculate what stocks are more profitable in python

Example:
- savings = 250
- current_value = [175,133,109,210,97]
- future_value = [200,125,128,228,133]

To maximise profits, the investor should buy stocks at indices 2 and 4 for an investment of 109 + 97 = 206. At the end of the year the stocks are sold for 128 + 133 = 261, so total profit is 261 - 206 = 55.

Will have the output of:
        55

4 tests are given to demonstrate the methods work.
2 of the methods selectStock() and check_profit() are built using conventional for loops. 
On the other hand, select_stock_comprehension() and check_profit_comprehension() are built using dictionary comprehension and list comprehension.
Thus I'm showing which way is faster having a method decorator @timing showing an output like:
        function:'selectStock' took: 0.0000085830688476562500 secs
        .function:'selectStock' took: 0.0000193119049072265625 secs
        .function:'select_stock_comprehension' took: 0.0000112056732177734375 secs
        .function:'select_stock_comprehension' took: 0.0000238418579101562500 secs
As you can see the selectStock() is slightly faster than select_stock_comprehension(), but if the speed is not a problem, I personally prefer the design of the comprehension, it's cleaner.

EXECUTION:
- install requirements: pip install -r requirements.txt
- run tests: python -m unittest discover
