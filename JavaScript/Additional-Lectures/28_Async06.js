// Async-Await
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms)); 
}

// 결과물은 프로미스를 출력함
async function process() {
    console.log('안녕하세요');
    await sleep(1000);
    console.log('반갑습니다');
}

process();