// super

class Parent {
    name;

    constructor(name) {
        this.name = name;
    }

    hello() {
        console.log('hello', this.name);
    }
}

class Child extends Parent {
    age;

    constructor(name, age) {
        super(name); // 부모의 constructor를 먼저 실행해주기 위해 사용
        this.age = age;
    }
    hello() {
        console.log('hello', this.name, this.age);
    }
}

const p = new Parent('Ena');
const c = new Child('Ena', 24);

console.log(p, c);
c.hello();