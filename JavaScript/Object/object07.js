// 표준 내장 객체 : Array

const a = new Array('1', '2', '3');

console.log(a, typeof a);
console.log(a instanceof Array);
console.log(a instanceof Object);

const b = ['1', '2', '3'];

console.log(b, typeof b);
console.log(b instanceof Array);
console.log(b instanceof Object);

console.log(b, slice(0, 1)); // slice는 Array 내장 함수
console.log(Array.prototype.slice, Object.prototype.slice);
