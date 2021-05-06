/**
 * [8] 字符串转换整数 (atoi)
 * 正则
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  // 难点：如何匹配正负号和数字
  const reg = new RegExp(/^(-|\+)?\d+/);
  const str = s.trim().match(reg);
  console.log('str :>> ', str);
  let res = str ? Number(str[0]) : 0;
  return res >= 0 ? Math.min(res, 2 ** 31 - 1) : Math.max(res, -(2 ** 31));
};

/**
 * 有限状态机
 * 程序每个时刻都对应一个状态：每次输入一个值，可以得到下一次的状态
 * https://leetcode-cn.com/problems/string-to-integer-atoi/solution/javascriptzi-dong-ji-guan-fang-ti-jie-de-xiang-xi-/
 * @param {*} s
 */
var myAtoi = function (s) {
  class Automata {
    constructor() {
      // 当前执行状态
      this.state = 'start';
      // 结果的正负号，默认为正
      this.sign = 1;
      // 结果的数值
      this.answer = 0;
      // 状态和输入值的对应表
      // [执行状态，[空格，正负，数字，其他]]
      this.statusMap = new Map([
        ['start', ['start', 'signed', 'in_number', 'end']],
        ['signed', ['end', 'end', 'in_number', 'end']],
        ['in_number', ['end', 'end', 'in_number', 'end']],
        ['end', ['end', 'end', 'end', 'end']],
      ]);
    }

    getInnerIndex(char) {
      if (char === ' ') {
        return 0;
      } else if (char === '-' || char === '+') {
        return 1;
      } else if (!isNaN(+char)) {
        return 2;
      } else {
        return 3;
      }
    }

    get(char) {
      this.state = this.statusMap.get(this.state)[this.getInnerIndex(char)];

      if (this.state === 'in_number') {
        this.answer = this.answer * 10 + (char - 0);
        this.answer =
          this.sign === 1
            ? Math.min(this.answer, 2 ** 23)
            : Math.min(this.answer, -Math.pow(-2, 23)); // 负负为正
      } else if (this.state === 'signed') {
        this.sign = char === '+' ? 1 : -1;
      }
      // 其他两种情况不影响结果
    }
  }

  let autoMata = new Automata();

  for (let char of s) {
    autoMata.get(char);
  }

  return autoMata.sign * autoMata.answer;
};

console.log('myAtoi :>> ', myAtoi(' -42'));
console.log('myAtoi :>> ', myAtoi('4193 with words'));
console.log('myAtoi :>> ', myAtoi('words and 987'));
console.log('myAtoi :>> ', myAtoi('-91283472332'));
