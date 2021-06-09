// prototype
// js는 prototype로 모든 객체를 연결해서 사용 가능

function Person(name, age) { // 생성자함수 : 객체를 생성하는 함수
    this.name = name;
    this.age = age;
    this.hello = function() {
        console.log('hello', this.name, this.age);
    };
}

// Person.prototype.hello = function() {
//     console.log('hello', this.name, this.age);
// }

const p = new Person('Ena', 24);

p.hello();
console.log(p.toString()); // toString은 기본 제공 함수

console.log(Person.prototype);
console.log(Person.prototype.toString);
console.log(Person.prototype.constructor); // constructor는 Person함수 자체를 말함
console.log(Person.prototype.hello);

console.log(Object.prototype);
console.log(Object.prototype.toString);
console.log(Object.prototype.constructor);

console.log(p instanceof Person);
console.log(p instanceof Object);

