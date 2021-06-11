/* 
Promises는 JS의 표준 내장 객체

생성자를 통해서 프로미스 객체를 만들 수 있다.
생성자의 인자로 executor 함수를 이용한다.
executor 함수는 resolve와 reject를 인자로 가진다.

생성자를 통해 프로미스 객체를 만드는 순간 pending(대기) 상태가 된다.

resolve 함수를 실행하면, fulfilled(이행) 상태가 된다.
reject 함수를 실행하면, rejected(거부) 상태가 된다.
*/

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 1000);
});

// resolve 함수가 실행되고 fulfilled 상태가 될 때 then으로 넘어온다.
// callback 작성
p.then(() => {
    console.log('1000ms 후에 fullfilled 됩니다.');
});