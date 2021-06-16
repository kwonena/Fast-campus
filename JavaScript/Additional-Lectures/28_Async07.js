// Async-Await에서 에러 잡기
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms)); 
}

function makeError() {
    await sleep(1000);
    const error = new Error();
    throw error; // 에러 발생
}

// 결과물은 프로미스를 출력함
async function process() {
    try {
        await makeError();
    } catch (e) {
        console.error(e);
    }
}

process();