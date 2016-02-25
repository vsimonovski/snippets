// reverse array using another array
function reverseArray(x){
	var y = [];
	for(var i = x.length-1, j = 0; i >= 0; i--, j++)
		y[j] = x[i];
	return y;
}

// in place reverse of array
function reverseInPlace(array){
	for(var i = 0; i < Math.floor(array.length/2); i++){
		var old = array[i];
		array[i] = array[array.length - 1 - i];
		array[array.length - 1 - i] = old;
	}
	return array;
}
