// Getter와 Setter
// 특정 값을 바꾸거나 조회할 때 원하는 값을 실행할 수 있다.

const numbers = {
    a: 1,
    b: 2,
    get sum() { // get은 반환해줄 값이 무조건 필요함
        console.log('sum 함수가 실행됩니다.');
        return this.a + this.b;
    }
}

console.log(numbers.sum); // sum()로 호출하지 않고 조회만 했는데도 실행이 됨

numbers.b = 5;
console.log(numbers.sum);
