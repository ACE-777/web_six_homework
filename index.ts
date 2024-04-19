console.log("----------------------------//\\//---------------------------------------")
function  hello( name: String): String {
    return  `\nTask: ${name}!`;
}

console.log(hello("1"));

type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
};

/* _____________ Test Cases _____________ */
// @ts-ignore
import type { Equal, Expect } from '@type-challenges/utils';

type Cases = [
    Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
    Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
    // @ts-expect-error
    MyPick<Todo, 'title' | 'completed' | 'invalid'>,
];

interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

interface Expected1 {
    title: string;
}

interface Expected2 {
    title: string;
    completed: boolean;
}
// -----------------
type TodoPreview1 = MyPick<Todo, 'title' >

const todo1: TodoPreview1 = {
    title: 'Clean room',
}

const exp1 : Expected1 = {
    title: 'Clean room'
}
// -----------------
type TodoPreview2 = MyPick<Todo, 'title' | 'completed'>

type ttwo = Pick<Todo, 'title' | 'completed'>
const r : ttwo = {
    title: 'dfdf',
    completed: false,
}
console.log(r.title,r.completed)
const todo2: TodoPreview2 = {
    title: 'Clean room',
    completed: false,
}

const exp2 : Expected2 = {
    title: 'Clean room',
    completed: false,
}


console.log(todo1.title)
console.log(exp1.title)
console.log("- result of check 1.1",todo1.title===exp1.title)

console.log(todo2.title, todo2.completed)
console.log(exp2.title, exp2.completed)
console.log("- result of check 1.2",todo2.title===exp2.title, todo2.completed===exp2.completed)

console.log(hello("2"));

type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

/* _____________ Test Cases _____________ */
// @ts-ignore
import type { Equal, Expect } from '@type-challenges/utils'

type cases2 = [
    Expect<Equal<string, MyReturnType<() => string>>>,
    Expect<Equal<123, MyReturnType<() => 123>>>,
    Expect<Equal<ComplexObject, MyReturnType<() => ComplexObject>>>,
    Expect<Equal<Promise<boolean>, MyReturnType<() => Promise<boolean>>>>,
    Expect<Equal<() => 'foo', MyReturnType<() => () => 'foo'>>>,
    Expect<Equal<1 | 2, MyReturnType<typeof fn>>>,
    Expect<Equal<1 | 2, MyReturnType<typeof fn1>>>,
]

type ComplexObject = {
    a: [12, 'foo']
    bar: 'hello'
    prev(): number
}

const fn = (v: boolean) => v ? 1 : 2
const fn1 = (v: boolean, w: any) => v ? 1 : 2

const fnString = () => 'Hello';
const fnNumber = () => 123;
const fnObject = () => ({ name: 'John', age: 30 });

type ReturnTypeString = MyReturnType<typeof fnString>;
type ReturnTypeNumber = MyReturnType<typeof fnNumber>;
type ReturnTypeObject = MyReturnType<typeof fnObject>;
const resultString: ReturnTypeString = fnString();
const resultNumber: ReturnTypeNumber = fnNumber();
const resultObject: ReturnTypeObject = fnObject();
// const rrr: ComplexObject: ComplexObject =
// const rr:  Ff = fnObject();

console.log(resultString);
console.log(resultNumber);
console.log(resultObject);
// console.log(rr)

type ReturnTypeComplexObject = MyReturnType<() => ComplexObject>;
const complexObjectFn = (): ComplexObject => ({
    a: [12, 'foo'],
    bar: 'hello',
    prev: () => 42,
});
const complexObjectResult: ReturnTypeComplexObject = complexObjectFn();
console.log(complexObjectResult);

type ReturnTypeFn = MyReturnType<typeof fn>;
type ReturnTypeFn1 = MyReturnType<typeof fn1>;
const fnResult: ReturnTypeFn = fn(true);
const fn1Result: ReturnTypeFn1 = fn1(false, 10);
console.log(fnResult);
console.log(fn1Result);

console.log(hello("4"));

type GetReadonlyKeys<
    T,
    U extends Readonly<T> = Readonly<T>,
    K extends keyof T = keyof T
> = K extends keyof T ? Equal<Pick<T, K>, Pick<U, K>> extends true ? K : never : never;

/* _____________ Test Cases _____________ */
// @ts-ignore
import type { Equal, Expect } from '@type-challenges/utils'

type cases3 = [
    Expect<Equal<'title', GetReadonlyKeys<Todo11>>>,
    Expect<Equal<'title' | 'description', GetReadonlyKeys<Todo22>>>,
]

interface Todo11 {
    readonly title: string
    description: string
    completed: boolean
}

interface Todo22 {
    readonly title: string
    readonly description: string
    completed?: boolean
}
