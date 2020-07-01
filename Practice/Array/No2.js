/*
 * 买卖股票的最佳时机
 * 可以多次交易同一支股票
 */

/* 起初，打算使用双重遍历的方式，依次与后面每个数比较，遇到比当前大的数立即退出循环 */

/**
 * 思路一
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let buyIn = prices[0]; // 买入价
  let inCome = 0; // 总收入
  for (const price of prices) {
    // 如果今天市场价大于买入价，卖出
    if (price > buyIn) {
      inCome += price - buyIn;
    }
    /* 市场价等于买入价
    容易造成逻辑上难以理解，不符合真实场景操作
    如果这样操作，当市场价低于买入价时，其实就亏了
    */
    buyIn = price;
  }
  return inCome;
};

/**
 * 思路二：如果后一天的价格比前一天高，则卖出获利
 * 这种思路只关注简单的数字关系
 *
 * @param {number[]} prices
 */
let maxProfit = function(prices) {
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < prices[i + 1]) {
      max += prices[i + 1] - prices[i];
    }
  }
  return max;
};
