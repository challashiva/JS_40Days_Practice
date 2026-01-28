function add(x) {
    return x+1;
}

add(5);

function add1(x) {
    return x+10;
}

function multiple(x) {
    return x*10;
}

const result = multiple(add1(10));
console.log(result);

function compose(f,g) {
    return function(x){
        return f(g(x));
    }
}

function square(x) {
    return x*x;
}

function add2(x) {
    return x+10;
}

const result2 = compose(square,add2);
console.log(result2(10));

function pipe(f,g) {
    return function(x) {
        return g(f(x));
    }
}

function square1(x) {
    return x*x;
}

function add3(x) {
    return x+10;
}

const piped = pipe(square1,add3)(10);
console.log(piped);

function multiPipe(fns1) {
    return function(value) {
        let result = value;
        console.log(fns1.length);
        for(let i=fns1.length-1;i>=0;i--){
            console.log(i);
            result = fns1[i](result);
        }
        return result;
    }
}

function addNums(x) {
    return x+10;
}

function multiplyNums(x) {
    return x*10;
}

function devideNums(x) {
    return x/10;
}

// const fn = multiPipe([addNums,multiplyNums,devideNums]);
const fn = multiPipe([x => x + 1, x => 2 * x, x => 3 * x]);
console.log(fn(2));

var argumentsLength = function(...args) {
    return args.length;
};

console.log(argumentsLength([{}, null, "3"]));
