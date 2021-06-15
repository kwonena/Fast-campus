const actor = {
    name: '이도현', // key: '값',
    age: 27,
    drama: '오월의 청춘'
};

function print(dohyun) {
    // 비구조화 할당(객체 분해) 문법
    // dohyun.name을 name으로 쓸 수 있게 됨
    // 원하는 값을 추출할 수 있게 됨
    const { name, age, drama } = dohyun;
    const text = `${drama}의 남자 주인공 역할을 맡은 ${name}의 나이는 ${age}입니다.`
    console.log(text);
}

function print(name, age, drama) {
    // 파라미터 자체로도 사용 가능
    const text = `${drama}의 남자 주인공 역할을 맡은 ${name}의 나이는 ${age}입니다.`
    console.log(text);
}

print(actor);


