let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let num = Number(input);

if (num % 2 !== 0) console.log('SK');
else console.log('CY');
