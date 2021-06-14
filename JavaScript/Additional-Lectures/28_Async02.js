// 비동기적 처리
function work() {
    setTimeout(() => {
    const start = Data.now();
    for(let i = 0; i < 10000000000; i++) {

    }
    const end = Data.now();
    console.log(end - start + 'ms');
    }, 0)
}

console.log('작업 시작!');
work();
console.log('다음 작업');