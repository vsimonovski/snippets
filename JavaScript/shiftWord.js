// if lr set to true shift left
// otherwise shift right
function shiftWord( str, n, lr ) {
    var lStr,
        rStr;
    if(lr) {
        lStr = str.slice(-n);
        rStr = str.slice(0, -n);

    } else {
        lStr = str.slice(n);
        rStr = str.slice(0, n);        
    }

    return lStr + rStr;
}

console.log('Left shift: ' + shiftWord('abcdefg', 2, true));
console.log('Right shift: ' + shiftWord('abcdefg', 2, false));
