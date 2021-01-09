/* 

  If you want to know why extra check is added, 
  explained in the below link..
  https://abhayjain13.medium.com/optimal-way-to-check-if-object-is-empty-using-vanilla-javascript-95dc359beb11

*/

const isEmpty = (obj) => {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
};

const emptyObj = new Object();

console.log(isEmpty(emptyObj)); // true
