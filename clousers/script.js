// A closure is the combination of a function bundled together (enclosed) with 
// references to its surrounding state (the lexical environment). In other words, 
// a closure gives a function access to its outer scope. In JavaScript, closures are
// created every time a function is created, at function creation time.

function closure(){
    const name = "Isalo";
    function innerFunc(){
        console.log(name);
    }
    return innerFunc;

}
let fn = closure()
fn()

function adder(num){
    function add(b){
        console.log(num + b);
    }
    return add;
}

let add5 = adder(5);
add5(10)

const myname = document.getElementById("my-name");
const btn = document.getElementById("btn");
const count = document.getElementById("count");

function makeTextSizer(size){
    function changeSize(){
         myname.style.fontSize = `${size}px`; 
    }
    return changeSize;
}

const size12 = makeTextSizer(12);
const size20 = makeTextSizer(20);
const size52 = makeTextSizer(52);
const size5 = makeTextSizer(5);
const size70 = makeTextSizer(70);


btn.addEventListener("click", size70);


function makeCounter(){
    let count=0;
    function counter(){
        console.log(count++);
    }
    return counter;
}

const counter1 = makeCounter();
btn.addEventListener("click", counter1);