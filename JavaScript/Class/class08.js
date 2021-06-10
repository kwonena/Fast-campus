// 변수, 함수 추가 및 오버라이딩
// 자식 함수가 부모 함수를 덮어씌움

class Parent {
    name = 'Kwon';

    hello() {
        console.log('hello', this.name);
    }
}

class Child extends Parent {
    age = 24;

    hello() {
        console.log('hello', this.name, this.age);
    }
}

const p = new Parent();
const c = new Child();

console.log(p, c);
c.hello();
c.name = 'Ena';
c.hello();