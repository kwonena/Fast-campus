// 함수를 호출할 때, 인자로 함수 사용

// 인자 c는 callback의 줄임말
// callback 함수 : 인자로 넘겨지는 함수
// 다른 함수가 실행을 끝낸 뒤 실행되는 함수
function hello(c) { 
    console.log('hello');
    c();
}

hello(function() {
    console.log('콜백');
});