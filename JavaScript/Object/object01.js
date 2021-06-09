// 생성자 함수

function A() {}

const a = new A(); // 객체를 만들어 실행
console.log(a, typeof a);

console.log(A()); // 함수 A의 리턴값을 실행

// 생성하면서 데이터 넣기
function B(name, age) {
    console.log(name, age);
}

const b = new B();
const c = new B('Ena', 24);
console.log(B());