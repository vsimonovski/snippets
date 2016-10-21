function isPalindrome( str ) {
    var len = str.length;

    for( var i = 0; i < len; i++ ) {
        if( str.charAt( i ) !== str.charAt( len-1-i ) )
            return false;
    }

    return true;
}

console.log(isPalindrome('notapalindrome'));
console.log(isPalindrome('amanaplanacanalpanama'));
