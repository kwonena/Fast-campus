// Callback 사용
// 1초마다 1씩 가져와서 더해주는 작업
function work(n, callback) {
    setTimeout(() => {
    const increased = n + 1;
    console.log(increased);
    if(callback) {
        callback(increased)
    }
    }, 1000)
}

work(0, n => {
    work(n, n => {
        work(n, n => {
            work(n, n => {
                work(n, n => {
                    console.log('작업 끝!') // callback 지옥에 빠질 수 있다,,
                })
            })
        })
    })
})