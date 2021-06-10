// static 변수, 함수

class A {
    static age = 24;
    static hello() {
        console.log(A.age); // 클래스 이름으로 직접 들어감
    }
}

console.log(A, A.age);
A.hello();

class B {
    age = 24;
    static hello() {
        console.log(this.age); // undefined 출력됨
    }
}
console.log(B, B.age);
B.hello();

class C {
    static name = '이나'; // static name이 class C의 이름이 됨
}
console.log(C);