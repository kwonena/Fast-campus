const dog = {
    name: '멍멍이',
    sound: '멍멍!',
    say() {
        // say: function say(), say: function()으로 쓸 수도 있음
        // 화살표 함수는 사용할 수 없음
        console.log(this.sound); // this는 dog 자체를 가르킴
    }
}

const cat = {
    name: '야옹이',
    sound: '야옹~'
}

cat.say = dog.say;
dog.say();
cat.say();

