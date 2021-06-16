// Promise.all
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

// Promise.all 하나의 값을 변수에 담아 하나하나 호출
// 하나라도 에러가 생기면 에러를 잡을 수 있음
async function process() { 
    const [dog, rabbit, turtle] = await Promise.all([getDog(), getRabbit(), getTurtle()]);
    console.log(dog);
    console.log(rabbit);
    console.log(turtle);
}

process();