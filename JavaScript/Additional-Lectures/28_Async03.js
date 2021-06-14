// 만약 work 함수가 끝나고 다른 작업을 수행하고 싶다면
// callback 함수를 파라미터로 전달해주면 됨
// callback 함수? 함수 타입의 값을 파라미터로 전달해서 호출하는 것
function work() {
    setTimeout(() => {
    const start = Data.now();
    for(let i = 0; i < 10000000000; i++) {

    }
    const end = Data.now();
    console.log(end - start + 'ms');
    callback(end - start)
    }, 0)
}

console.log('작업 시작!');
work((ms) => {
    console.log('작업 완료');
    console.log(ms + 'ms 걸림');
});
console.log('다음 작업'); 