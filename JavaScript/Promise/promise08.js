/*
then 함수에서 다시 프로미스 객체를 리턴하는 방법을 통해 체이닝하면,
비동기 작업을 순차적으로 표현할 수 있다.
*/

function p() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
}

// 다양한 방법으로 then에 함수를 넣을 수 있다
p().then(() => {
    return p();
})
.then(() => p()) // 바로 return을 해주는 경우 이렇게 써줄 수도 있다
.then(p)
.then(() => {
    console.log('4000ms 후에 fulfilled 됩니다.');
});