// 객체에 속성 추가하기

// 1.값을 속성으로 넣기
function A() {
    this.name = 'Ena';
}

const a = new A(); // {name: 'Ena'}
console.log(a);

// 2. 함수를 속성으로 넣기
function B() {
    this.hello = function() {
        console.log('hello');
    };
}

new B().hello();

