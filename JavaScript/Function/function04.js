// function()과 new Function의 차이점

global.a = 0;

{
    const a = 1;

    const test = new Function('return a');

    console.log(test());
}

{
    const b = 2;

    const test2 = function() {
        return b;
    };

    console.log(test2());
}