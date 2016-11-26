// Determines whether two integers are equal without using any comparison operators
function isSame( num1, num2 ) {
  return !(num1 ^ num2);
}

console.log(isSame(4, 4));
console.log(isSame(4, 8));

/* 
4: 0100
4: 0100
0100^0100 = 0000 => 0, !0 = true
----------------------------------
8: 1000
4: 0100
1000^0100 = 1100 => 12, !12 = false
*/
