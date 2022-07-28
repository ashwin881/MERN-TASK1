// const obj = {
//     func() {
//         return this
//     }
// }
// let v = obj.func
// console.log(v() == window)
// console.log(obj.func() == window)

//1.arrow fns are not hoisted
//2.this is binded to the parent



// what is first order function?
// function square(num){
//     return num*num;
// }
// function printSquare(fn,n)
// {
//     return `square of ${n} is ${fn(n)}`
// }
// console.log(printSquare(square,5));


var i=2
console.log(i)
i=3