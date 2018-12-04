Solution to https://github.com/gordonmzhu/beasts/issues/7

# Overview
In AccountingJS 13, we looked at accounting.toFixed method. We found that we could improve the function by simulating calculations like 1.005 * 100 with 1.005e2 (using exponential notation).

Your job is to rewrite accounting.toFixed so that it does NOT use multiplication or exponential notation. Instead, you will actually move the decimal point using string manipulation.
