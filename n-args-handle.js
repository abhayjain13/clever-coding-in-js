/*
    Function with n number of arguments
*/

const multiply = (...args) => eval([...args].join("*"));
console.log(multiply(2, 3, 4));
