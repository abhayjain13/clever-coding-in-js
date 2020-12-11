/*
  Currying:
  function(a, b, c,...) === function(a)(b)(c)... === function(a, b)(c)...
*/

function curry(...args) {
  function curried(...args1) {
    return curry(...args, ...args1);
  }
  curried.value = args.length > 0 ? eval(args.join("+")) : 0;
  return curried;
}

console.log("output", curry(1, 2)(3)(4)(5).value);
