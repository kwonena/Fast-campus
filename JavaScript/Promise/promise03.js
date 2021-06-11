/*
프로미스 객체가 rejected 되는 시점에 p.catch 안에 설정한 콜백 함수가 실행된다.
*/

function p() {
    return new Promise((resolve, reject) => {
        // pending
        setTimeout(() => {
            reject(); // rejected
        }, 1000);
    });
}

// resolve 함수가 실행되고 rejected 상태가 될 때 catch으로 넘어온다.
// callback 작성
p().then(() => {
    console.log('1000ms 후에 fullfilled 됩니다.');
}).catch(() => {
    console.log('1000ms 후에 rejected 됩니다.');
});