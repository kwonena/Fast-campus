// 생성자 함수를 이용하여 새로운 객체를 만들어 내는 방법

function Person(name, age) {
    console.log(this);
    this.name = name;
    this.age = age;
}

const p = new Person('Ena', 24);
console.log(p, p.name, p.age);

const a = new Person('Nana', 25);
console.log(a, a.name, a.age);

// arrow 함수는 this가 생성되지 않아 객체를 생성할 수 없음
const Cat = (name, age) => {
    this.name = name;
    this.age = age;
}

const c = new Cat();
