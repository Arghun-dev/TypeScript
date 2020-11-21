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
