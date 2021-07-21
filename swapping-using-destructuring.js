// Example 1n
let a = 1;
let b = 2;
console.log({ a, b }); // { a: 1, b: 2 }

[a, b] = [b, a];

console.log({ a, b }); // { a: 2, b: 1 }

// Example 2
let x = 1;
let y = 2;
let z = 3;
console.log({ x, y, z }); // { x: 1, y: 2, z: 3 }

[x, y, z] = [z, y, x];

console.log({ x, y, z }); // { x: 3, y: 2, z: 1 }
