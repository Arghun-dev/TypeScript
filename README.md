# TypeScript

## Benefits

1. Strong Typing
2. Object-oriented features
3. Compile-time errors
4. Great tooling

## issues

**first issue**
one of the issues I hit when I created react app using `typescript` is that it does not know `JSX`

`ERROR`: **cannot use JSX unless the --JSX flag is provided**

`SOLUTION`: Well I worked around it by adding "jsx": "react" to tsconfig.json

Error: 

### Defining Types

For example, to create an object with an inferred type which includes name: string and id: number, you can write:

```js
const user = {
  name: 'arghun',
  id: 0
}
```

You can explicitly describe this object’s shape using an `interface` declaration:

```js
interface User {
  name: string;
  id: number;
}
```

You can then declare that a JavaScript object conforms to the shape of your new `interface` by using syntax like `: TypeName` after a variable declaration:

```js
const user: User = {
  name: "arghun",
  id: 0
}
```

If you provide an object that doesn’t match the interface you have provided, TypeScript will warn you:

```js
interface User {
  name: string;
  id: number;
}

const user: User = {
  userName: "arghun",
  `Type '{ username: string; id: number; }' is not assignable to type 'User'.
  Object literal may only specify known properties, and 'username' does not exist in type 'User'.`
  id: 0
}
```

Since JavaScript supports `classes` and `object-oriented programming`, so does TypeScript. You can use an interface declaration with classes:

```js
interface User {
  name: string;
  id: number
}

class UserAccount {
  name: string;
  id: number;
  
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const arghun: User = new UserAccount('arghun', 1)
```

You can use interfaces to annotate parameters and return values to functions:

```js
function getAdminUser(): User {
  //
}

function deleteUser(user: User) {
  //
}
```

There are already a small set of primitive types available in JavaScript: `boolean`, `bigint`, `null`, `number`, `string`, `symbol`, `object`, and `undefined`, which you can use in an interface. TypeScript extends this list with a few more, such as `any (allow anything)`, `unknown (ensure someone using this type declares what the type is)`, `never (it’s not possible that this type could happen)`, and `void (a function which returns undefined or has no return value)`.

You’ll see that there are two syntaxes for building types: `Interfaces` and `Types`. You should prefer `interface`. Use type when you need specific features.



### Composing Types

With TypeScript, you can create complex types by combining simple ones. There are two popular ways to do so: with `Unions`, and with `Generics`.

With a union, you can declare that a type could be one of many types. For example, you can describe a boolean type as being either `true` or `false`:

```js
type MyBool = true | false;
```

Unions provide a way to handle different types too. For example, you may have a function that takes an array or a string:

```js
function getLength(obj: string | string[]) {
  return obj.length;
}
```

### Generics

Generics provide variables to types. A common example is an array. An array without generics could contain anything. An array with generics can describe the values that the array contains.

```js
type StringArray = Array<string>
type NumberArray = Array<number>
type ObjectWithNameArray = Array<{ name: string }>
```


### Basic Types

How to define variables in Typescript

**Boolean**

```js
let isDone: boolean = false;
```

**Number**

As in JavaScript, all numbers in TypeScript are either floating point values or BigIntegers. These floating point numbers get the type number, while BigIntegers get the type bigint. In addition to hexadecimal and decimal literals, TypeScript also supports binary and octal literals introduced in ECMAScript 2015.

```js
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: bigint = 100n;
```

**String**

Another fundamental part of creating programs in JavaScript for webpages and servers alike is working with textual data. As in other languages, we use the type string to refer to these textual datatypes. Just like JavaScript, TypeScript also uses double quotes (") or single quotes (') to surround string data.

```js
const color: string = 'blue'
```

`template strings`

```js
let sentence: string = `my name is ${name}`
```

**Array**

TypeScript, like JavaScript, allows you to work with arrays of values. Array types can be written in one of two ways. In the first, you use the type of the elements followed by [] to denote an array of that element type:

```js
let list: number[] = [1, 2, 3];
```

The second way uses a generic array type, Array<elemType>:
  
```js
const list: Array<number> = [1,2,3];
```

**Tuple**

Tuple types allow you to express an array with a fixed number of elements whose types are known, but need not be the same. For example, you may want to represent a value as a pair of a `string` and a `number`:

```js
// Declare a Tuple Type
let x: [string, number];

// Initialize it
x = ['arghun', 25]; // This is correct

x = [25, 'arghun']; // this is incorrect because we've initialized the first element as string and the second number;

// ERROR
Type 'number' is not assignable to type 'string'.
Type 'string' is not assignable to type 'number'.
```

When accessing an element with a known index, the correct type is retrieved:

```js
// ok
console.log(x[0].substring(1));

// not ok
console.log(x[1].substring(1)); // ERROR => Property 'substring' does not exist on type 'number'
```

Accessing an element outside the set of known indices fails with an error:

```js
x[3] = "world";

// ERROR
Tuple type '[string, number]' of length '2' has no element at index '3'.
```

```js
console.log(x[5].toString());

// ERROR
Object is possibly 'undefined'.
Tuple type '[string, number]' of length '2' has no element at index '5'.
```

**Enum**

A helpful addition to the standard set of datatypes from JavaScript is the enum. As in languages like C#, an enum is a way of giving more friendly names to sets of numeric values.

```js
enum Color {
  Red,
  Green,
  Blue
}

let c: Color = Color.Green;
```

By default, enums begin numbering their members starting at 0. You can change this by manually setting the value of one of its members. For example, we can start the previous example at 1 instead of 0:

```js
enum Color {
  Red = 1,
  Green,
  Blue,
}
let c: Color = Color.Green;
```

Or, even manually set all the values in the enum:

```js
enum Color {
  Red = 1,
  Green = 2,
  Blue = 4,
}
let c: Color = Color.Green;
```

A handy feature of enums is that you can also go from a numeric value to the name of that value in the enum. For example, if we had the value 2 but weren’t sure what that mapped to in the Color enum above, we could look up the corresponding name:

```js
enum Color {
  Red = 1,
  Green,
  Blue,
}
let colorName: string = Color[2];

// Displays 'Green'
console.log(colorName);
```

**Unknown**

We may need to describe the type of variables that we do not know when we are writing an application. These values may come from dynamic content – e.g. from the user – or we may want to intentionally accept all values in our API. In these cases, we want to provide a type that tells the compiler and future readers that this variable could be anything, so we give it the `unknown` type.

```js
let notSure: unknown = 4;
```

**Any**

In some situations, not all type information is available or its declaration would take an inappropriate amount of effort. These may occur for values from code that has been written without TypeScript or a 3rd party library. In these cases, we might want to opt-out of type checking. To do so, we label these values with the any type:

```js
declare function getValue(key: string): any;
// OK, return value of 'getValue' is not checked
const str: string = getValue("myString");
```

The any type is a powerful way to work with existing JavaScript, allowing you to gradually opt-in and opt-out of type checking during compilation.

Unlike unknown, variables of type any allow you to access arbitrary properties, even ones that don’t exist. These properties include functions and TypeScript will not check their existence or type:

The any will continue to propagate through your objects:

```js
let looselyTyped: any = {};
let d = looselyTyped.a.b.c.d;
//  ^ = let d: any
```

`After all, remember that all the convenience of any comes at the cost of losing type safety. Type safety is one of the main motivations for using TypeScript and you should try to avoid using any when not necessary.`

**Void**

`void` is a little like the opposite of `any:` the absence of having any type at all. You may commonly see this as the return type of functions that do not return a value:

```js
function warnUser(): void {
  console.log('test')
}
```

Declaring variables of type void is not useful because you can only assign null (only if --strictNullChecks is not specified, see next section) or undefined to them:

**Null and Undefined**

in TypeScript, both undefined and null actually have their types named undefined and null respectively. Much like void, they’re not extremely useful on their own:

```js
// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;
```

**Never**

The `never` type represents the type of values that never occur. For instance, never is the return type for a function expression or an arrow function expression that always throws an exception or one that never returns. Variables also acquire the type never when narrowed by any type guards that can never be true.

**Object**

object is a type that represents the non-primitive type, i.e. anything that is not number, string, boolean, bigint, symbol, null, or undefined.

With object type, APIs like Object.create can be better represented. For example:

```js
declare function create(o: object | null): void;
```

**Type assertions**

Sometimes you’ll end up in a situation where you’ll know more about a value than TypeScript does. Usually, this will happen when you know the type of some entity could be more specific than its current type.

Type assertions are a way to tell the compiler “trust me, I know what I’m doing.” A type assertion is like a type cast in other languages, but it performs no special checking or restructuring of data. It has no runtime impact and is used purely by the compiler. TypeScript assumes that you, the programmer, have performed any special checks that you need.

Type assertions have two forms.

One is the `as`-syntax:

```js
const strLength: number = (someValue as string).length;
```

The other version is the “angle-bracket” syntax:

```js
let strLength: number = (<string>someValue).length;
```


## Interface

One of TypeScript’s core principles is that type checking focuses on the shape that values have. This is sometimes called “duck typing” or “structural subtyping”. In TypeScript, interfaces fill the role of naming these types, and are a powerful way of defining contracts within your code as well as contracts with code outside of your project.

**Our First Interface**

The easiest way to see how interfaces work is to start with a simple example:

```js
function printLabelObj(obj: { label: string }) {
  console.log(obj.label)
}

let myObj = { size: 10, label: "size 10 object" }

printLabelObj(myObj)
```

`We can write the same example again, this time using an **interface** to describe the requirement of having the label property that is a string:`

```js
interface LabeledValue {
  label: string
}

function printLabel(labeledObj: LabeledValue) {
  console.log(labeledObj.label)
}
```

**Optional Properties**

Not all properties of an interface may be required. Some exist under certain conditions or may not be there at all. These optional properties are popular when creating patterns like “option bags” where you pass an object to a function that only has a couple of properties filled in.

Here's an example of this:

```js
interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({ color: "black" });
```

Interfaces with optional properties are written similar to other interfaces, with each optional property denoted by a ? at the end of the property name in the declaration.

The advantage of optional properties is that you can describe these possibly available properties while still also preventing use of properties that are not part of the interface. For example, had we mistyped the name of the color property in createSquare, we would get an error message letting us know:


```js
interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 };
  if (config.clor) {
Property 'clor' does not exist on type 'SquareConfig'. Did you mean 'color'?
    // Error: Property 'clor' does not exist on type 'SquareConfig'
    newSquare.color = config.clor;
Property 'clor' does not exist on type 'SquareConfig'. Did you mean 'color'?
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({ color: "black" });
```


**Readonly properties**

Some properties should only be modifiable when an object is first created. You can specify this by putting readonly before the name of the property:

```js
interface Point {
  readonly x: number;
  readonly y: number;
}
```

You can construct a Point by assigning an object literal. After the assignment, x and y can’t be changed.

```js
let p1: Point = { x: 10, y: 20 };
p1.x = 5; // error!
Cannot assign to 'x' because it is a read-only property.
```

TypeScript comes with a ReadonlyArray<T> type that is the same as Array<T> with all mutating methods removed, so you can make sure you don’t change your arrays after creation:
  
```js
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;

ro[0] = 12; // error!
Index signature in type 'readonly number[]' only permits reading.
ro.push(5); // error!
Property 'push' does not exist on type 'readonly number[]'.
ro.length = 100; // error!
Cannot assign to 'length' because it is a read-only property.
a = ro; // error!
The type 'readonly number[]' is 'readonly' and cannot be assigned to the mutable type 'number[]'.
```

**Excess Property Checks**

In our first example using interfaces, TypeScript lets us pass { size: number; label: string; } to something that only expected a { label: string; }. We also just learned about optional properties, and how they’re useful when describing so-called “option bags”.

However, combining the two naively would allow an error to sneak in. For example, taking our last example using createSquare:


**Function Types**

```js
interface SearchFunc {
  (source: string, subString: string): boolean
}

let mySearch: SearchFnc;

mySearch = function (src: string, subString: string): boolean {
  let result = src.search(sub);
  return result
}
```
