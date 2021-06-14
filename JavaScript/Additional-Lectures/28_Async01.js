// 동기적 처리
function work() {
    const start = Data.now(); // 현재 날짜를 숫자로 변환해주는 js 내장 함수
    for(let i = 0; i < 10000000000; i++) {

    }
    const end = Data.now();
    console.log(end - start + 'ms');
}

work();
console.log('다음 작업');