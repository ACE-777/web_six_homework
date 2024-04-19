"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("----------------------------//\\//---------------------------------------");
function hello(name) {
    return `\nTask: ${name}!`;
}
console.log(hello("1"));
const todo1 = {
    title: 'Clean room',
};
const exp1 = {
    title: 'Clean room'
};
const r = {
    title: 'dfdf',
    completed: false,
};
console.log(r.title, r.completed);
const todo2 = {
    title: 'Clean room',
    completed: false,
};
const exp2 = {
    title: 'Clean room',
    completed: false,
};
console.log(todo1.title);
console.log(exp1.title);
console.log("- result of check 1.1", todo1.title === exp1.title);
console.log(todo2.title, todo2.completed);
console.log(exp2.title, exp2.completed);
console.log("- result of check 1.2", todo2.title === exp2.title, todo2.completed === exp2.completed);
console.log(hello("2"));
const fn = (v) => v ? 1 : 2;
const fn1 = (v, w) => v ? 1 : 2;
const fnString = () => 'Hello';
const fnNumber = () => 123;
const fnObject = () => ({ name: 'John', age: 30 });
const resultString = fnString();
const resultNumber = fnNumber();
const resultObject = fnObject();
// const rrr: ComplexObject: ComplexObject =
// const rr:  Ff = fnObject();
console.log(resultString);
console.log(resultNumber);
console.log(resultObject);
const complexObjectFn = () => ({
    a: [12, 'foo'],
    bar: 'hello',
    prev: () => 42,
});
const complexObjectResult = complexObjectFn();
console.log(complexObjectResult);
const fnResult = fn(true);
const fn1Result = fn1(false, 10);
console.log(fnResult);
console.log(fn1Result);
console.log(hello("4"));
