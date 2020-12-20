/*
    Fibonacci Series Algorithm:
    Step 1. Initialize a variable(x) that will print the output 
    Step 2. Set a variable(next) with value 1 and intialize a temp variable to store value.
    Step 2. Set the number till which of Fibonacci series to be printed(number).
    Step 4. Use loop for the following steps
        -> temp = next
        -> next = next + x
        -> x = temp
        -> print the value to show
*/

const number = 50; // Set the number
for (
  let x = 0, next = 1, temp; // Intialization
  x < number; // Condition Check
  temp = next, next = next + x, x = temp // Increment
) {
  console.log(x);
}
