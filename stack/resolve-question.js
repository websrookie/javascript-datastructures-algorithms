/**
 * 进制转换算法
 * @param {number} decNumber 十进制数字
 * @returns 转换后数字
 */
function baseConverter(decNumber, base) {
  const remStack = new Stack();
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // {6}
  let number = decNumber;
  let rem;
  let baseString = '';
  if (!(base >= 2 && base <= 36)) {
    return '';
  }
  while (number > 0) {
    rem = Math.floor(number % base);
    remStack.push(rem);
    number = Math.floor(number / base);
  }
  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()]; // {7}
  }
  return baseString;
}
