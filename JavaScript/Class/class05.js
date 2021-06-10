// get, set

class A {
    _name = 'no name';

    get name() {
        return this._name + '!!!';
    }

    set name(value) {
        this._name = value + 'ㅎㅇ';
    }
}

const a = new A();
console.log(a);
a.name = 'Ena'; // Ena 값이 setter의 value로 들어감
console.log(a); // _name은 이제 Enaㅎㅇ의 값을 갖게 됨

console.log(a.name); // getter의 값
console.log(a._name); // _name의 값

// readonly
class B {
    _name = 'no name';

    get name() {
        return this._name + '!!!';
    }
}

const b = new B();
console.log(b);
b.name = 'Ena';
console.log(b); // setter가 없어서 그대로 no name만 출력