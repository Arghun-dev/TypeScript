# TypeScript

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
