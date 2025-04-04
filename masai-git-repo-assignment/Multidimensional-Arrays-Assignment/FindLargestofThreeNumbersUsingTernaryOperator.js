// Problem Statement: Create a program that takes three numbers as input and determines the largest number using nested ternary operators. You must solve this problem using only ternary logic without using the Math.max() function.

let num1 = 45
let num2 = 78
let num3 = 33

if ((num1 > num2) && (num1 > num3)) {
  console.log(num1)
}
else
{
  if ((num2 > num3) && (num2 > num1)) {
     console.log(num2)
  }
  else
  {
    console.log(num3)
  }
}