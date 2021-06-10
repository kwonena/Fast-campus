// constructor

class A {}
console.log(new A());

class B {
    constructor() {
        console.log('constructor');
    }
}
console.log(new B());

class C {
    constructor(name, age) {
        console.log('constructor', name, age);
    }
}
console.log(new C('Ena', 24));
console.log(new C()); // name, age는 undefined로 출력됨