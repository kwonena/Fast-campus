// Promise 객체를 리턴하는 함수

function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
}

// Promise 객체를 이용해서 비동기 로직을 수행할 때
p(1000).then(ms => {
    console.log(`${ms} ms후에 실행됩니다.`);
});

// Promise 객체를 리턴하는 함수를 await로 호출하는 방법
// await는 async 함수 내에서 유효하다. 
(async function main() {
    const ms = await p(1000);
    console.log(`${ms} ms후에 실행됩니다.`);
})();