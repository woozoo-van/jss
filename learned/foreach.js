const array = ['a', 'b', 'c'];

array.forEach(e => {
    console.log(e);
});

array.forEach((e, idx) => { // 반복문 인덱스 활용
    console.log(e, idx);
});