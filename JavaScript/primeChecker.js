function isPrime ( num ) {
    for ( var i = 2; i < num; i++ ) {
        if(Math.floor( num % i ) === 0 )
            return false;
    }
    return true;
}

console.log(isPrime(6));
console.log(isPrime(4));
console.log(isPrime(11));
console.log(isPrime(887));