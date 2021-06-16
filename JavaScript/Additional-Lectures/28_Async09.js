// Promise.race
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms)); 
}

const getDog = async () => {
    await sleep(1000);
    return '멍멍이';
};

const getRabbit = async () => {
    await sleep(500);
    return '토끼';
};

const getTurtle = async () => {
    await sleep(3000);
    return '거북이';
};

// 가장 빨리 끝난게 에러라면 잡을 수 있지만
// 다른게 에러라면 에러를 잡을 수 없음
async function process() { 
    try {
        const first = await Promise.race([getDog(), getRabbit(), getTurtle()]);
        console.log(first);
    } catch (e) {
        console.log(e);
    }
}

process();