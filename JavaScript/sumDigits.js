function sumDigits( number ) {
    var sum = 0;

    while ( number ) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }

    return sum;
}

var number = 123456;
console.log(sumDigits( number ));
