let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let number = Number(input);

let result = 0;

boxing(number, 0);

if (!result) result = -1;
console.log(result);

function boxing(nowNum, tempResult) {
  tempResult += 1;

  if (result < tempResult) {
    if (nowNum - 5 > 0) boxing(nowNum - 5, tempResult);
    if (nowNum - 3 > 0) boxing(nowNum - 3, tempResult);
    if (nowNum - 5 === 0 && result <= tempResult) return (result = tempResult);
    if (nowNum - 3 === 0 && result <= tempResult) return (result = tempResult);
  }
}
