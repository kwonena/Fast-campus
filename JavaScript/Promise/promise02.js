/*
then을 설정하는 시점을 정확히 하고,
함수의 실행과 동시에 프로미스 객체를 만들어 pending이 시작하도록 하기 위해
프로미스 객체를 생성하면서 리턴하는 함수 p를 만들어 p 실행과 동시에 then을 설정한다.
*/

function p() {
    return new Promise((resolve, reject) => {
        // pending
        setTimeout(() => {
            resolve(); // fulfilled
        }, 1000);
    });
}

// resolve 함수가 실행되고 fulfilled 상태가 될 때 then으로 넘어온다.
// callback 작성
p().then(() => {
    console.log('1000ms 후에 fullfilled 됩니다.');
});