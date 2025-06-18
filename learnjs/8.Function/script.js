function sum(a,b) {
    const sum = a + b;
    console.log("result", sum);
    
}

const a = 12;
const b = 4;
sum(a, b);


const c = 12;
const d = 4;
sum(c, d);

const e = 12;
const f = 4;
sum(e, f);


const square = function (num) {
    return num*num;
};

console.log(square);



function addSquares(a, b) {
    const sa = square(a);
    const sb = square(b);

    function square(num) {
        return num * num;
    }

    return sa + sb;
}

console.log(addSquares(3, 4));