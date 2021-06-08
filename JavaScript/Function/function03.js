// 생성자 함수로 함수를 만드는 법
// new Function('인자1', '인자2', ..., '함수의 body');

const sum = new Function('a', 'b', 'return a + b');
//매개변수는 ''안에 써줘야 함

console.log(sum(1, 2));